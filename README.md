# Meganode API Issue Reproduction

```bash
$ yarn install

$ cp .env.example .env
# edit .env and add your API key

# works fine with public testnet API
$ npx hardhat run scripts/deploy.ts
BigNumber { value: "1677830019" }
BigNumber { value: "3" }
BigNumber { value: "4" }

# go to hardhat.config.ts and change the networks.hardhat.forking.url to the commented out one
$ npx hardhat run scripts/deploy.ts
ProviderError: Too Many Requests error received from bsc-testnet.nodereal.io
    at HttpProvider._fetchJsonRpcResponse (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/core/providers/http.ts:212:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async HttpProvider.request (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/core/providers/http.ts:85:29)
    at async JsonRpcClient._send (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/jsonrpc/client.ts:355:14)
    at async JsonRpcClient._perform (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/jsonrpc/client.ts:285:23)
    at async Promise.all (index 5)
    at async ForkStateManager.initializeGenesisAccounts (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/provider/fork/ForkStateManager.ts:79:20)
    at async Function.create (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:195:7)
    at async HardhatNetworkProvider._init (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/provider/provider.ts:258:28)
    at async HardhatNetworkProvider._send (/Users/owen/code/nodereal/nodereal-ctf/node_modules/hardhat/src/internal/hardhat-network/provider/provider.ts:197:5)

# works fine without the network forking feature
$ npx hardhat run scripts/deploy.ts --network bsc_testnet
BigNumber { value: "1677830019" }
BigNumber { value: "3" }
BigNumber { value: "4" }
```
