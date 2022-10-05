## VMBC Ethers Sample DApps

### Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Deploying Contract using Hardhat](#deploying-contract-using-hardhat)
4. [Sample 1 - Get Greeting](#sample-1---get-greeting)
5. [Sample 2 - Set Greeting](#sample-2---set-greeting)
6. [Sample 3 - Data Copy](#sample-3---data-copy)
7. [Sample 4 - Batching](#sample-4---batching)

### Overview
Samples for using VMBC Ethers

### Prerequisites
* Deploy VMware Blockchain
* Install npm packages
```sh
npm install
```

### Deploying Contract using Hardhat
Following command uses `vmbc` network from inside the file `hardhat.config.js`
```sh
npx hardhat run --network vmbc scripts/deploy.js
```
Note: Make a note of Contract Address of Greetings Smart Contract from the output of above command

---

### Sample 1 - Get Greeting
#### Overview
* This sample depicts way to use view functions of deployed smart contracts
#### Setup
* Update the `CONTRACT_ADDRESS` to the contract address received from Deploying usin Hardhat step
#### Executing
```sh
node sample-dapps/1_get_greetings.js
```

---

### Sample 2 - Set Greeting
#### Overview
* This sample depicts way to call any write based functions of deployed smart contracts
#### Setup
* Update the `CONTRACT_ADDRESS` to the contract address received from Deploying usin Hardhat step
* Update the `PRIVATE_KEY_ACC` to the private key of an account
#### Executing
```sh
node sample-dapps/2_set_greetings.js
```

---

### Sample 3 - Data Copy
#### Overview
* This sample depicts following aspects,
  * Compiling a Smart Contracts in JavaScript using `solc`
  * Deploying the Smart Contract
  * Interacting with programatically deployed Smart Contracts
#### Setup
* Update the `PRIVATE_KEY_ACC` to the private key of an account
#### Executing
```sh
node sample-dapps/3_data_copy.js
```

---

### Sample 4 - Batching
#### Overview
* This sample depicts following aspects,
  * Batching of multiple read based calls
  * Batching of multiple write based transactions
#### Setup
* Update the `PRIVATE_KEY_ACC_1` and `PRIVATE_KEY_ACC_3` to the private key of two accounts
#### Executing
```sh
node sample-dapps/4_batching.js
```

---
