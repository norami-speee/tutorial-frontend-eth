import * as ethUtil from "ethereumjs-util";

import {Address0, Mnemonic} from "../consts";
import {createPrivateKeyFromMnemonic} from "../utils";

describe("create Private Key", () => {
  test("from Mnemonic", () => {
    const privateKey: Buffer = createPrivateKeyFromMnemonic(Mnemonic); // FIXME
    const privateKeyHex = ethUtil.bufferToHex(privateKey);
    expect(privateKeyHex).toEqual(
      "0x94E6838841F8E3561B4A457CEDE2FAA1DA23B039FBD745784F63FD3180E810BE".toLowerCase()
    );

    // FIXME
    // privateKey => publicKey => address
    const address = "";
    expect(address).toEqual(Address0.toLowerCase());
  });
});
