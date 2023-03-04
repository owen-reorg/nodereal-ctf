import { ethers } from "hardhat";
import hre from 'hardhat'
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  // if(hre.network.name == 'hardhat') {
  //   await helpers.reset("https://bsc.nodereal.io", 26140660);
  // }
  const addr = '0x798238246FD6AFF019bEc52D0D78F1Bc5CC593A8';
  const TenYearsChallenge = await ethers.getContractFactory("TenYearsChallenge");
  const tenYearsChallenge = await TenYearsChallenge.attach(addr);
  const TenYearsChallengeHack = await ethers.getContractFactory("TenYearsChallengeHack");
  const hack = await TenYearsChallengeHack.deploy(addr);
  await hack.deployed();
  const tx = await hack.hack();
  await tx.wait();
  console.log("isComplete", await tenYearsChallenge.isComplete())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
