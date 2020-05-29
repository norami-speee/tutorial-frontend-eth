pragma solidity >=0.4.21 <0.7.0;

import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract ExampleToken is ERC20, ERC20Detailed {
    string private _name = "TestContract";
    string private _symbol = "TC";
    uint8 private _decimals = 18;

    address account = msg.sender;
    uint value = 100000000000000000000;

    constructor() ERC20Detailed( _name, _symbol, _decimals) public {
        _mint(account, value);
    }
    function mint(address account, uint256 amount) public {
        return _mint(account, amount);
    }
}