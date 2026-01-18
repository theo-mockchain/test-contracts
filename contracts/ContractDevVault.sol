// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ContractDevVault is Ownable {
  constructor() Ownable(msg.sender) {}

  receive() external payable {}

  fallback() external payable {}

  function withdrawEther(address payable to, uint256 amount) external onlyOwner {
    require(to != address(0), "Invalid recipient");
    require(address(this).balance >= amount, "Insufficient balance");
    (bool success, ) = to.call{value: amount}("");
    require(success, "ETH transfer failed");
  }

  function withdrawToken(IERC20 token, address to, uint256 amount) external onlyOwner {
    require(to != address(0), "Invalid recipient");
    require(token.transfer(to, amount), "Token transfer failed");
  }
}