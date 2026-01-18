const hre = require("hardhat");

async function main() {
  const { ethers } = hre;

  const [deployer] = await ethers.getSigners();

  const balance = await ethers.provider.getBalance(deployer.address);

  console.log("Deploying with:", deployer.address);
  console.log("Balance:", ethers.formatEther(balance), "ETH");

  const ContractDevToken = await ethers.getContractFactory("ContractDevToken");
  const token = await ContractDevToken.deploy();

  await token.waitForDeployment();
  
  console.log("ContractDevToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
