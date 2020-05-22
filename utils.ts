import Common from "ethereumjs-common";
import {TransactionOptions} from "ethereumjs-tx";
import Web3 from "web3";

import {Address} from "./types";

const hdPath = "m/44'/60'/0'/0";

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

export const createTxOpts = async (web3: Web3): Promise<TransactionOptions> => {
  const networkId = await web3.eth.net.getId();
  const chainId = await web3.eth.getChainId();

  return {
    common: Common.forCustomChain(
      "mainnet",
      {
        networkId,
        chainId
      },
      "petersburg"
    )
  };
};
