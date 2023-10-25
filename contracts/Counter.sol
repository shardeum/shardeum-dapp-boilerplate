// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private _count;

    event CountChanged(uint256 newCount);

    function getCount() external view returns (uint256) {
        return _count;
    }

    function increment() external {
        _count += 1;
        emit CountChanged(_count);
    }

    function decrement() external {
        require(_count > 0, "Counter is already at zero!");
        _count -= 1;
        emit CountChanged(_count);
    }
}
