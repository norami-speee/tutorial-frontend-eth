pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    string private _name = "ExampleToken";
    string private _symbol = "EXP";
    uint8 private _decimals = 1;

    uint value = 10000;

    constructor ()
        ERC20(_name, _symbol)
        public
    {
        _mint(msg.sender, value);
    }
}
