// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MyToken
 * @dev Implementation of a basic ERC20 token with additional safety features
 * Uses OpenZeppelin's secure and tested contracts
 */
contract MyToken is ERC20, ERC20Burnable, ERC20Permit, Ownable {
    /**
     * @dev Constructor that mints initial supply to the deployer
     * @notice Creates 1,000,000 tokens with 18 decimals
     */
    constructor() 
        ERC20("My Token", "MTK") 
        ERC20Permit("My Token")
        Ownable(msg.sender)
    {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    /**
     * @dev Allows owner to mint additional tokens if needed
     * @param to Address to receive the minted tokens
     * @param amount Amount of tokens to mint (in wei)
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
