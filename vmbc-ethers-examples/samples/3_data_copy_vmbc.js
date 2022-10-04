const { ethers } = require("@vmware-blockchain/ethers");
const { Console } = require("console");
solc = require("solc");
fs = require("fs");
const { exit } = require("process");
const path = require('path');

var VMBC_JSON_RPC_URL = 'http://127.0.0.1:8545';

// Setting up a JSON RPC Provider
var provider_vmbc = new ethers.providers.JsonRpcProvider(VMBC_JSON_RPC_URL);

// Account 1 Private Key 
const private_key_acc_2 = "Change-this-to-a-Private-Key-of-an-Account-in-VMBC";
const wallet_vmbc = new ethers.Wallet(private_key_acc_2, provider_vmbc);

var CONTRACT_FILE = String("../contracts/DataCopy.sol");
var CONTRACT_NAME = path.parse(CONTRACT_FILE).name;
ABI = "";
BYTECODE = "";

function compileContract() {
    // Reading the file
    file = fs.readFileSync(CONTRACT_FILE).toString();
    // input structure for solidity compiler
    var input = {
        language: "Solidity",
        sources: {
            [CONTRACT_FILE]: {
                content: file,
            },
        },
        settings: {
            outputSelection: {
                "*": {
                    '*': ['evm', 'bytecode', 'abi'],
                },
            },
        },
    };
    var output = JSON.parse(solc.compile(JSON.stringify(input)));
    ABI = output.contracts[CONTRACT_FILE][CONTRACT_NAME].abi;
    BYTECODE = output.contracts[CONTRACT_FILE][CONTRACT_NAME].evm.bytecode.object;
}

const deployContract = async () => {
    let factory = new ethers.ContractFactory(ABI, BYTECODE, wallet_vmbc);
    let contract = await factory.deploy();

    await contract.deployed()
    console.log("Contract deployed successfully");

    return contract.address;
}

const main = async () => {
    compileContract();
    
    CONTRACT_ADDRESS = await deployContract();
    console.log("Contract Address: " + CONTRACT_ADDRESS);

    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider_vmbc);
    const contractWithSigner = contract.connect(wallet_vmbc);

    var inBytes = ethers.utils.formatBytes32String("vmware blockchain ethers");
    console.log("inBytes: " + inBytes);
    
    var tx;   
    try {
        tx = await contractWithSigner.callDatacopy(inBytes);
    } catch (err) {
        console.log("Cannot call callDatacopy");
        console.log(err);
        exit(1);
    }

    const txReceipt = await tx.wait();
    if (txReceipt) {
        console.log("Transaction Hash: " + tx.hash);
    }

    const data = await contractWithSigner.getMemoryStored();
    console.log("Data Copy from Contract:", ethers.utils.parseBytes32String(data));
}

main();