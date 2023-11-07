const { ethers } = require("hardhat");
const fs = require("fs");


async function main() {
    const SwapContract = await ethers.getContractFactory("SwapToken");
    const swap = await SwapContract.deploy();
    await swap.deployed();

    console.log('CONTRACT_ADDRESS=' + swap.address);
    const contractInfo = {
        address: swap.address,
        abi: swap.interface.format("json"),
    };
    const contractAddress = swap.address;
    fs.writeFileSync('swapcontract-info.json', JSON.stringify(contractInfo, null, 2));
    fs.writeFileSync('swapcontract-address.txt', contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
