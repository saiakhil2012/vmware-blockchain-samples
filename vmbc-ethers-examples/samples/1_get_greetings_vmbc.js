const { ethers } = require("@vmware-blockchain/ethers");

const CONTRACT_ABI = [
    "function getGreeting() public view returns (string memory)"
];

// Contract Address of Greetings contract
const CONTRACT_ADDRESS_VMBC = "Change-this-to-Contract-Address-of-Greetings-Contract";

// Setting up a JSON RPC Provider
var provider_vmbc;
try {
  provider_vmbc = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
} catch (err) {
  console.log("Cannot connect to Provider");
  console.log(err);
}

const contract = new ethers.Contract(CONTRACT_ADDRESS_VMBC, CONTRACT_ABI, provider_vmbc);

const main = async () => {

  verifySampleSetup();

  var curGreeting;
  try {
    curGreeting = await contract.getGreeting();
  } catch (err) {
    console.log("Error while calling contract view method");
    console.log(err);
  }

  console.log("Current Greeting: ", curGreeting);
}

main()

// Verifies if the variable(s) needed to be changed to run this sample are indeed changed
function verifySampleSetup() {
  if (verifyContractAddressChanged(CONTRACT_ADDRESS_VMBC) == false ) {
    console.log("Before running this sample, update the CONTRACT_ADDRESS_VMBC as instructed in README")
    process.exit(1);
  }
}

function verifyContractAddressChanged(contract_address) {
  if (contract_address === "Change-this-to-Contract-Address-of-Greetings-Contract") {
    return false;
  }
}
