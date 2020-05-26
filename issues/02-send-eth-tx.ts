import BN from "bn.js";
import Web3 from "web3";

import {Address0, Address1, Mnemonic} from "../consts";
import {createPrivateKeyFromMnemonic, createTxOpts} from "../utils";
import {Transaction, TransactionOptions} from "ethereumjs-tx";

describe("send-eth-tx", () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:8545")
  );

  test("send tx and get balance", async () => {
    const beforeBalance = await web3.eth.getBalance(Address0);
    expect(new BN(beforeBalance).gtn(0)).toBeTruthy();

    const nonce = await web3.eth.getTransactionCount(Address0);
    const nonceHex = web3.utils.toHex(nonce);
    const txParams = {
        nonce: nonceHex,
        gasPrice: '0x09184e72a000',　// min 21000 gas
        gasLimit: '0x27100', // 
        to: Address1, // 送り先
        value: '0x100000000000000000', // 金額
        data: '0x0',
    }
    // create Transaction and signTx
    const privateKey = createPrivateKeyFromMnemonic(Mnemonic);
    // 未使用
    const txOpt = await createTxOpts(web3);

    const tx = new Transaction(txParams);

    tx.sign(privateKey)
    const serializedTx = tx.serialize()
    const signedTx = '0x' + serializedTx.toString('hex');
    try {
        await web3.eth.sendSignedTransaction(signedTx)
            .on('transactionHash', function (hash) {
                console.log("transactionHash = ", hash);
            })
    } catch (e) {
        console.log(e)
    }
    const afterBalance = await web3.eth.getBalance(Address0);

    console.log("balance", beforeBalance, "=>", afterBalance)
    expect(new BN(afterBalance).lt(new BN(beforeBalance))).toBeTruthy();
  });
});
