import Common from "ethereumjs-common";
import {TransactionOptions} from "ethereumjs-tx";
import {HDNode, Wallet} from "ethers";
import Web3 from "web3";

import {Address} from "./types";

const web3 = new Web3();
const hdPath = "m/44'/60'/0'/0";

export const createPrivateKeyFromMnemonic = (
  mnemonic: string,
  hdPathIndex = "0",
  passphrase = ""
): Buffer => {
  const hdNode = HDNode.fromMnemonic(mnemonic);
  const node = hdNode.derivePath("m/44'/60'/0'/0/0");
  return Buffer.from(node.privateKey.slice(2), "hex");
};

export const createPublicKeyFromMnemonic = (mnemonic: string): Buffer => {
  const hdNode = HDNode.fromMnemonic(mnemonic);
  const node = hdNode.derivePath("m/44'/60'/0'/0/0");
  return Buffer.from(node.publicKey.slice(2), "hex");
};

export const createAddressFromPublicKey = (publicKey: Buffer): Address => {
  // FIXME
  return "";
};

export const createAddressFromPrivateKey = (privateKeyHex: string): Address => {
  const account = web3.eth.accounts.privateKeyToAccount(privateKeyHex);
  return account.address;
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
