import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  console.log("Deploying MyToken contract...");

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("✅ Token deployed to:", address);

  // Write the deployed address to the frontend config
  const configPath = path.join(__dirname, "../src/config/networks.ts");
  const configContent = `import { ethers } from 'ethers';

export const SHARDEUM_TESTNET = {
  chainId: "0x1fb7", // 8119
  chainName: "Shardeum EVM Testnet",
  nativeCurrency: {
    name: "SHM",
    symbol: "SHM",
    decimals: 18,
  },
  rpcUrls: ["https://api-mezame.shardeum.org"],
  blockExplorerUrls: ["https://explorer-mezame.shardeum.org"],
};

export const TOKEN_ADDRESS = "${address}";

// Runtime validation for TOKEN_ADDRESS
if (TOKEN_ADDRESS === "0xYOUR_CONTRACT_ADDRESS_HERE" || !ethers.isAddress(TOKEN_ADDRESS)) {
  console.warn(
    "⚠️  WARNING: TOKEN_ADDRESS is not configured!\\n" +
    "Please update TOKEN_ADDRESS in src/config/networks.ts with your deployed contract address.\\n" +
    "Deploy your contract with: npm run deploy:testnet"
  );
}
`;

  fs.writeFileSync(configPath, configContent);
  console.log("✅ Contract address written to src/config/networks.ts");
  console.log("\nNext steps:");
  console.log("1. Run 'npm run dev' to start the frontend");
  console.log("2. Connect your wallet and interact with your token!");
  console.log(`\nView your contract on the explorer: https://explorer-mezame.shardeum.org/address/${address}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
