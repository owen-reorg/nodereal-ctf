import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const dotenv = require('dotenv');

dotenv.config()

const MEGANODE_API_KEY = process.env.MEGANODE_API_KEY!;

const BSC_PRIVATE_KEY = process.env.BSC_PRIVATE_KEY!;

const config: HardhatUserConfig = {
  solidity: {
    compilers:
      [
        {
          version: "0.7.6",
        },
        {
          version: "0.8.18",
        },
      ],
  },
  networks: {
    hardhat: {
      forking: {
        // url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
        url: `https://bsc.nodereal.io`,
      },
    },
    bsc_testnet: {
      // url: `https://bsc-testnet.nodereal.io/v1/${MEGANODE_API_KEY}`,
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [BSC_PRIVATE_KEY]
    },
    bsc: {
      // url: `https://bsc-mainnet.nodereal.io/v1/${MEGANODE_API_KEY}`,
      url: `https://bsc.nodereal.io`,
      accounts: [BSC_PRIVATE_KEY]
    },
  }
};

export default config;
