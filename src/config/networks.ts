import { ethers } from 'ethers';

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

export const TOKEN_ADDRESS = "0xYOUR_CONTRACT_ADDRESS_HERE";

// Runtime validation for TOKEN_ADDRESS
if (TOKEN_ADDRESS === "0xYOUR_CONTRACT_ADDRESS_HERE" || !ethers.isAddress(TOKEN_ADDRESS)) {
  console.warn(
    "⚠️  WARNING: TOKEN_ADDRESS is not configured!\n" +
    "Please update TOKEN_ADDRESS in src/config/networks.ts with your deployed contract address.\n" +
    "Deploy your contract with: npm run deploy:testnet"
  );
}
