import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@openzeppelin/hardhat-upgrades"

import * as dotenv from "dotenv";
 
// Cargar variables desde el archivo .env
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {

    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 11155111,  // Identificador de Sepolia
    },

    buildBear: {
      url: process.env.BUILDBEAR_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY2 ? [process.env.PRIVATE_KEY2] : [],
      chainId: 20939,  // Identificador de BUILDBEAR
    }
  }
};

export default config;
