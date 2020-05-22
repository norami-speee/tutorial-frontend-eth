import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

describe("tutorial", () => {
  describe("create PrivateKey from Mnemonic", () => {
    const before = web3.eth.getBalance("");
  });
});
