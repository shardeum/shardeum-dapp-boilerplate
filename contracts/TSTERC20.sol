// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TSTERC20Token is ERC20, Ownable {
    constructor() ERC20("TSTERC20Token", "TST") {
        _mint(msg.sender, 1000000 * 10 ** 18); // Mint 1,000,000 tokens during deployment
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function transferFromOwner(address to, uint256 amount) public onlyOwner {
        _transfer(msg.sender, to, amount);
    }

    function approveFor(address spender, uint256 amount) public {
        _approve(msg.sender, spender, amount);
    }

    function allowanceOf(address owner, address spender) public view returns (uint256) {
        return allowance(owner, spender);
    }
}
