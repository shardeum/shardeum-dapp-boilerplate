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

    // Event to emit when an NFT is minted
    event NFTMinted(address indexed creator, uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Shardeum Dev NFTMinter", "SNFT") {}

    // Modifier to ensure exact payment
    modifier paidEnough() {
        require(msg.value == mintPrice, "Insufficient payment to mint an NFT");
        _;
    }

    // Modifier to refund excess payment
    modifier checkValue() {
        _;
        if (msg.value > mintPrice) {
            payable(msg.sender).transfer(msg.value - mintPrice);
        }
    }

    function mintNFT(address recipient, string memory tokenURI) public payable paidEnough checkValue returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        emit NFTMinted(msg.sender, newItemId, tokenURI);
        return newItemId;
    }

    // Function to update mint price
    function updateMintPrice(uint256 newPrice) public {
        mintPrice = newPrice;
    }

    // Function to withdraw contract balance to owner
    function withdraw() public {
        payable(owner()).transfer(address(this).balance);
    }
}
