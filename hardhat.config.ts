import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Normalize private key to ensure it has 0x prefix
function getAccounts(): string[] {
  if (!process.env.PRIVATE_KEY) {
    console.warn(
      "⚠️  WARNING: No PRIVATE_KEY found in .env file!\n" +
      "Deployment will fail. Please add your private key to .env:\n" +
      "PRIVATE_KEY=your_private_key_here"
    );
    return [];
  }

  const key = process.env.PRIVATE_KEY.trim();
  const normalizedKey = key.startsWith('0x') ? key : `0x${key}`;

  return [normalizedKey];
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    shardeumTestnet: {
      url: "https://api-mezame.shardeum.org",
      chainId: 8119,
      accounts: getAccounts(),
    },
  },
};

export default config;
