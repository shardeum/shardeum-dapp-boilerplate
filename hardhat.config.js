require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    sphinx: {
      url: "https://sphinx.shardeum.org/",
      accounts: ["PRIVATE_KEY_HERE"],
      gas: 20000000,
    },
  },
};
