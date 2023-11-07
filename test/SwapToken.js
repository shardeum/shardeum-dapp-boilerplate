const { expect } = require("chai");
const hre = require("hardhat");
const provider=hre.provider;

describe("SwapToken", async function () {



    const [owner, otherAccount1,otherAccount2] = await ethers.getSigners();

    const swap = await ethers.getContractFactory("SwapToken");
    // deploy a TSTTOkeN contract tokens can be minted
    const swapresult = await swap.deploy();
    it("Should swap TST for SHM", async function () {


        // assert that the value is correct
        const tokenresult=await swapresult.swap(10,0)
        expect(await tokenresult.to.equal(10));
    });

});