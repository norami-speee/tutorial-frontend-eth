pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract ExampleToken is ERC20 {
  string private _name = "ExampleToken";
  string private _symbol = "EXP";
  uint8 private _decimals = 1;

  uint256 value = 10000;

  constructor() public ERC20(_name, _symbol) {
    _mint(msg.sender, value);
  }
}
