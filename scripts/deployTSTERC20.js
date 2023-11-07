const { ethers } = require("hardhat");
const fs = require("fs");


async function main() {
    const TSTContract = await ethers.getContractFactory("TSTToken");
    const tst20 = await TSTContract.deploy(1000000);
    await tst20.deployed();

    console.log('CONTRACT_ADDRESS=' + tst20.address);
    const contractInfo = {
        address: tst20.address,
        abi: tst20.interface.format("json"),
    };
    const contractAddress = tst20.address;
    fs.writeFileSync('contract-info.json', JSON.stringify(contractInfo, null, 2));
    fs.writeFileSync('contract-address.txt', contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
