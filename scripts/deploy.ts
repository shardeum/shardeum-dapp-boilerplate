import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  console.log("Token deployed to:", await token.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
