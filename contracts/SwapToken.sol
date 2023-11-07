// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IERC20.sol";


contract SwapToken {
    address private constant UNISWAP_ROUTER=0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private SHM = 0xae49C37fc1C0487Fe1F3778570a496a9F01960AC ;
    address private WETH=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address constant TST= 0x5a1Cdd07b84EA4273283a717AD722c00EdE6E79E;
    IERC20 private weth = IERC20(WETH);
    IERC20 private tst = IERC20(TST);
    IERC20 private shm = IERC20(SHM);
    IUniswapV2Router02 public uniswapRouter;
    constructor(){
        uniswapRouter = IUniswapV2Router02(UNISWAP_ROUTER);
    }
    //Swap TST for SHM
    function swapTSTForSHM(
        uint amountOutDesired,
        uint amountInMax
    ) external returns (uint amountOut) {
        tst.transferFrom(msg.sender, address(this), amountInMax);
        tst.approve(address(uniswapRouter), amountInMax);

        address[] memory path;
        path = new address[](3);
        path[0] = TST;
        path[1] = WETH;
        path[2] = SHM;

        uint[] memory amounts = uniswapRouter.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            msg.sender,
            block.timestamp
        );

        // Refund TST to msg.sender
        if (amounts[0] < amountInMax) {
            tst.transfer(msg.sender, amountInMax - amounts[0]);
        }

        return amounts[2];
    }
    function swapSHMForTST(
        uint amountOutDesired,
        uint amountInMax
    ) external returns (uint amountOut) {
        shm.transferFrom(msg.sender, address(this), amountInMax);
        shm.approve(address(uniswapRouter), amountInMax);

        address[] memory path;
        path = new address[](3);
        path[0] = SHM;
        path[1] = WETH;
        path[2] = TST;

        uint[] memory amounts = uniswapRouter.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            msg.sender,
            block.timestamp
        );

        // Refund SHM to msg.sender
        if (amounts[0] < amountInMax) {
            shm.transfer(msg.sender, amountInMax - amounts[0]);
        }

        return amounts[2];
    }
}
