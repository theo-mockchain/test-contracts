require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    stagenet: {
      url: "http://localhost:8545",
      accounts: [
        "0xfab76b3c2f97f68e0a71ad1ad837e2f7e34f6bcb58f3a11fb793484523dc1a9b",
      ],
    },
  },
};

