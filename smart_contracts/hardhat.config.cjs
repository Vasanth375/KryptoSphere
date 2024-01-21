require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/nWxPD3kaG5cqHkdffZkOP0t8VvE4CSaK",
      accounts: ['fd7785f27343bc43576b6b8b669b3fde0df2f1b73481800f3d78dada197b98ba']
    },
  },
};
