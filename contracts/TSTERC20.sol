// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';


contract TSTToken is ERC20{

    constructor(uint256 intialSupply) ERC20("TSTToken", "TSTT") {
        _mint(msg.sender, intialSupply * 10 ** 18); // Mint 1,000,000 tokens during deployment
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }


}