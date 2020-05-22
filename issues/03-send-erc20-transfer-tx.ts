import Web3 from "web3";

/**
 * Deploy the ERC20 token to ganache before this issue
 *
 * truffle - contract development framework
 * https://www.trufflesuite.com/docs/truffle/getting-started/installation
 *
 * deployed contract
 * https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20Detailed.sol
 */
describe("send-erc20-transfer-tx", () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:8545")
  );

  test("send tx", async () => {
    // https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#methods-mymethod-estimategas
    // https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#methods-mymethod-encodeabi
    // https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#methods-mymethod-send
  });

  test("get transfer event", async () => {
    // https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#getpastevents
  });
});
