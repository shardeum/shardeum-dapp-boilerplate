// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMinter is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Set the price for minting an NFT
    uint256 public mintPrice = 1 ether;

    constructor() ERC721("Shardeum Dev NFTMinter", "SNFT") {}

    function mintNFT(address recipient, string memory tokenURI) public payable returns (uint256) {
        // Ensure exactly 1 Ether is sent
        require(msg.value == mintPrice, "You must send exactly 1 SHM to mint an NFT");
        
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}