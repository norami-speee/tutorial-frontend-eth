import BN from "bn.js";
import Common from "ethereumjs-common";
import {TransactionOptions} from "ethereumjs-tx";
import Web3 from "web3";

import {Address0, Mnemonic} from "../consts";
import {createPrivateKeyFromMnemonic} from "../utils";

describe("send-eth-tx", () => {
  test("", async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );

    const beforeBalance = await web3.eth.getBalance(Address0);
    expect(new BN(beforeBalance).gtn(0)).toBeTruthy();

    // FIXME
    // create TxParams
    // from Address0 to Address1

    // FIXME
    // create Transaction and signTx
    const privateKey = createPrivateKeyFromMnemonic(Mnemonic);
    const txOpt = await createTxOpts(web3);

    // FIXME
    // sendSignedTransaction

    const afterBalance = await web3.eth.getBalance(Address0);
    expect(new BN(afterBalance).lt(new BN(beforeBalance))).toBeTruthy();
  });
});

const createTxOpts = async (web3: Web3): Promise<TransactionOptions> => {
  const networkId = await web3.eth.net.getId();
  const chainId = await web3.eth.getChainId();

  return {
    common: Common.forCustomChain(
      "mainnet",
      {
        networkId, // ganache-cliの引数で指定したnetworkId. 共有したサンプルだと1200
        chainId
      },
      "petersburg"
    )
  };
};
