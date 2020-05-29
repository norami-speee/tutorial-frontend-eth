import Web3 from "web3";
import { Address0, Address1, Mnemonic } from "../consts";
import metaCoinJSON from "../truffle/build/contracts/ExampleToken.json";
import { createPrivateKeyFromMnemonic, createTxOpts } from "../utils";
import { Transaction, TransactionOptions } from "ethereumjs-tx";

const networkId = "1200";
const senderAddress = Address0;
const receiverAddress = Address1;
const contractJSON = metaCoinJSON;

const privateKey = createPrivateKeyFromMnemonic(Mnemonic);

/**
 * Deploy the ERC20 token to ganache before this issue
 *
 * truffle - contract development framework
 * https://www.trufflesuite.com/docs/truffle/getting-started/installation
 *
 * deployed contract
 * https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20Detailed.sol
 */
describe("send-erc20-transfer-tx", () => {
  const provider = new Web3.providers.WebsocketProvider("http://localhost:8545");
  const web3 = new Web3(provider);
  const contractAddress = contractJSON.networks[networkId].address;
  const contract = new web3.eth.Contract((contractJSON as any).abi, contractAddress, {
    from: senderAddress,
  });
  contract.events.Transfer({})
    .on('data', (event: any) => {
      console.log("data", event);
      setTimeout(() => {
        provider.disconnect(0, "close");
      }, 1000)
    })
    .on("changed", (event: any) => {
      console.log("changed", event)
    })
    .on("error", console.error);;
  test("send tx", async () => {
    console.log("start");
    console.log("contract.methods", contract.methods)
    const value = 1;
    const beforeSenderCoin = Number(await contract.methods.balanceOf(senderAddress).call());
    const beforeReceiverCoin = Number(await contract.methods.balanceOf(receiverAddress).call());

    const nonce = await web3.eth.getTransactionCount(Address0);
    const nonceHex = web3.utils.toHex(nonce);
    const sendCoin = contract.methods.transfer(receiverAddress, value);
    const encodedAbi = await sendCoin.encodeABI();
    const gas = await sendCoin.estimateGas();
    console.log("gas", gas, web3.utils.numberToHex(gas * 10))
    const txParams = {
      nonce: nonceHex,
      gasPrice: web3.utils.numberToHex(21000),　// min 21000 gas
      gasLimit: web3.utils.numberToHex(gas * 10), // 10倍しないとなぜかエラー
      to: contractAddress, // 送り先
      // value: '0x100000000000000000', // 金額
      data: encodedAbi,
    }
    const privateKey = createPrivateKeyFromMnemonic(Mnemonic);
    // 未使用
    const txOpt = await createTxOpts(web3);

    const tx = new Transaction(txParams);

    tx.sign(privateKey)
    const serializedTx = tx.serialize()
    const signedTx = '0x' + serializedTx.toString('hex');
    try {
      const response = await web3.eth.sendSignedTransaction(signedTx)
        .on('transactionHash', function (hash) {
          console.log("transactionHash = ", hash);
        })
      console.log("response", response)
    } catch (e) {
      console.log(e)
    }
    const afterSenderCoin = Number(await contract.methods.balanceOf(senderAddress).call());
    const afterReceiverCoin = Number(await contract.methods.balanceOf(receiverAddress).call());

    console.log({
      beforeSenderCoin,
      beforeReceiverCoin,
      afterSenderCoin,
      afterReceiverCoin,
      value,
    })
    expect(beforeSenderCoin - value == afterSenderCoin).toBeTruthy();
    expect(beforeReceiverCoin + value == afterReceiverCoin).toBeTruthy();
  });

  test("get transfer event", async () => {
    const events = await contract.getPastEvents("Transfer");
    console.log("events", events);
  });
});
