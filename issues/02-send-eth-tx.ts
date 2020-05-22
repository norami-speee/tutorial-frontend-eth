import BN from "bn.js";
import Web3 from "web3";

import {Address0, Mnemonic} from "../consts";
import {createPrivateKeyFromMnemonic, createTxOpts} from "../utils";

describe("send-eth-tx", () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:8545")
  );

  test("send tx and get balance", async () => {
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
