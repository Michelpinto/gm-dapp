const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");

async function main() {
    const Gm = await hre.ethers.getContractFactory("Gm");
    const gm = await Gm.deploy();
    await gm.deployed();
    console.log("Gm deployed to:", gm.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
