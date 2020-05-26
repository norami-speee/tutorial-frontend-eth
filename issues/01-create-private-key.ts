import * as ethUtil from "ethereumjs-util";

import { Address0, Mnemonic } from "../consts";
import { createPrivateKeyFromMnemonic, createPublicKeyFromMnemonic, createAddressFromPrivateKey } from "../utils";

describe("create Private Key", () => {
  test("from Mnemonic", () => {
    const privateKey: Buffer = createPrivateKeyFromMnemonic(Mnemonic);
    const privateKeyHex = ethUtil.bufferToHex(privateKey);
    expect(privateKeyHex).toEqual(
      "0x94E6838841F8E3561B4A457CEDE2FAA1DA23B039FBD745784F63FD3180E810BE".toLowerCase()
    );
    // このpublicKeyは未使用
    const publicKey: Buffer = createPublicKeyFromMnemonic(Mnemonic);
    const publicKeyHex = ethUtil.bufferToHex(publicKey);

    // privateKey => publicKey => address
    // 上記の条件は満たしていない
    const address = createAddressFromPrivateKey(privateKeyHex);
    expect(address.toLowerCase()).toEqual(Address0.toLowerCase());
  });
});
