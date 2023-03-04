# Use Hardhat with Solidity CTF

Prepare your environment:

```bash
$ yarn install

$ cp .env.example .env
# edit .env and add your API key
# charge your address with some BNB
```

Put the challenge source code in `contracts/` like `contracts/TenYearsChallenge.sol`.

Create the solution file in `scripts/` like `scripts/TenYearsChallenge.ts`.

Run the solution with Hardhat and the network forking feature as below.
It will use a local node to run the solution and fork the mainnet to get the state.
You can run tests with the same environment without spending any gas.

```bash
$ npx hardhat run scripts/TenYearsChallenge.ts
```

If your solution needs new contracts to be deployed, you can refer to `scripts/TenYearsChallengeHack.sol` and `scripts/TenYearsChallengeHack.ts`.

After you solve the challenge, you can run your solution in the mainnet with the following command.

```bash
$ npx hardhat run scripts/TenYearsChallenge.ts --network bsc
```
