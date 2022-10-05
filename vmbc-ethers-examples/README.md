## VMBC Ethers Samples

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

### Sample 1 - Get Greeting
#### Overview
* This sample potrays way to use a view functions of deployed smart contract
#### Setup
* Update the `CONTRACT_ADDRES`

### Sample 2 - Set Greeting

### Sample 3 - Data Copy

### Sample 4 - Batching

