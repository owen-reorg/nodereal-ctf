import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  //
  // // const lockedAmount = ethers.utils.parseEther("0.001");
  // const lockedAmount = 1
  //
  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  //
  // await lock.deployed();
  //
  // console.log(
  //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.attach('0xD95b1cD65CAfB6026B2f1c07ED2E1ed981F757D8')

  console.log(await lock.unlockTime())
  console.log(await lock.count())
  let tx = await lock.incr();
  await tx.wait();
  console.log(await lock.count())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
