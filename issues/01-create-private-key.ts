import * as ethUtil from "ethereumjs-util";

import {Address0, Mnemonic, PrivateKey0} from "../consts";
import {createPrivateKeyFromMnemonic} from "../utils";

describe("create Private Key", () => {
  test("from Mnemonic", () => {
    const privateKey: Buffer = createPrivateKeyFromMnemonic(Mnemonic); // FIXME
    const privateKeyHex = ethUtil.bufferToHex(privateKey);
    expect(privateKeyHex).toEqual(PrivateKey0.toLowerCase());

    // FIXME
    // privateKey => publicKey => address
    const address = "";
    expect(address).toEqual(Address0.toLowerCase());
  });
});
