pragma solidity >=0.4.21 <0.7.0;

import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract ExampleToken is ERC20, ERC20Detailed {
	// constructor() public {
	// 	_mint(msg.sender, 10000);
	// }
    function mint(address account, uint256 amount) public {
        return _mint(account, amount);
    }
}