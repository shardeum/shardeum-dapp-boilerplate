const { expect } = require("chai");
const hre = require("hardhat");
const provider=hre.provider;

describe("TSTTOKEN", async function () {

    const initialAmount = 1000000;

    const [owner, otherAccount1,otherAccount2] = await ethers.getSigners();

    const tst = await ethers.getContractFactory("TSTToken");
    // deploy a TSTTOkeN contract tokens can be minted
    const tstresult = await tst.deploy(initialAmount );
    it("Should mint initial supply 1000000", async function () {


        // assert that the value is correct
        expect(await tstresult.totalSupply()).to.equal(initialAmount);
    });
    it("should mint 25 TSTOken",async function(){
        await tstresult.mint(otherAccount1.address,25);

        // assert that address balance is equal 25
        expect(await tstresult.balanceOf(otherAccount1.address).to.equal(25));
    })
});