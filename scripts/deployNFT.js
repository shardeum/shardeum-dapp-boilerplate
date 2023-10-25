const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFTMinter");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log(
    `Deployed at ${nft.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});