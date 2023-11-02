require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/608e841f018b49d396e0fe5f87d247c0",
      accounts: ["9f04357fe1e6792e3faa865a4823a334da10fa2ebd46aa3621aa784ca382f9c7"],
    }
  }
};
