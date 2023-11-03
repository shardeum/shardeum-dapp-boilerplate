const { ethers } = require("hardhat");
const fs = require("fs");


async function main() {
    const ERC20Contract = await ethers.getContractFactory("TSTERC20Token");
    const erc20 = await ERC20Contract.deploy();
    await erc20.deployed();

    console.log('CONTRACT_ADDRESS=' + erc20.address);
    const contractInfo = {
        address: erc20.address,
        abi: erc20.interface.format("json"),
    };
    const contractAddress = erc20.address;
    fs.writeFileSync('contract-info.json', JSON.stringify(contractInfo, null, 2));
    fs.writeFileSync('contract-address.txt', contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
