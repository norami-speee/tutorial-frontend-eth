import {Address} from "./types";

const path = "m/44'/60'/0'/0";

export const createPrivateKeyFromMnemonic = (
  mnemonic: string,
  hdPathIndex = "0",
  passphrase = ""
): Buffer => {
  // FIXME
  return Buffer.of(0);
};

export const createPublicKeyFromPrivateKey = (privateKey: Buffer): Buffer => {
  // FIXME
  return Buffer.of(0);
};

export const createAddressFromPublicKey = (publicKey: Buffer): Address => {
  // FIXME
  return "";
};
