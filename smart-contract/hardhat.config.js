require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: "6RBEMRR4Y54PBHJMU42T8KAQ695NVG3ME3"
  }
};
