const ethers = require("@vmware-blockchain/ethers");

const CONTRACT_ABI = [
  "function getGreeting() public view returns (string memory)",
  "function setGreeting(string memory _newGreeting) public"
];

// Deployed On VMBC
const CONTRACT_ADDRESS_VMBC = "Change-this-to-Contract-Address-of-Greetings-Contract";

// Acount 1 Private Key
const private_key1_vmbc = "Change-this-to-a-Private-Key-of-an-Account-in-VMBC";

// Setting up a JSON RPC Provider
var provider_vmbc;
try {
  provider_vmbc = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
} catch (err) {
  console.log(err);
}

const wallet = new ethers.Wallet(private_key1_vmbc, provider_vmbc);

const contract = new ethers.Contract(CONTRACT_ADDRESS_VMBC, CONTRACT_ABI, provider_vmbc);

const main = async () => {
  verifySampleSetup();

  var greetingBefore;
  try {
    greetingBefore = await contract.getGreeting();
  } catch (err) {
    console.log(err);
  }
  console.log("Greeting Before: ", greetingBefore);

  const contractWithWallet = contract.connect(wallet);

  var tx;
  try {
    tx = await contractWithWallet.setGreeting("Welcome to VMBC");
  } catch (err) {
    console.log(err);
  }
  
  rc = await tx.wait();

  var greetingAfter = await contract.getGreeting();
  console.log("Greeting After: ", greetingAfter);
}

main()

// Verifies if the variable(s) needed to be changed to run this sample are indeed changed
function verifySampleSetup() {
  var verified = true;
  if (verifyContractAddressChanged(CONTRACT_ADDRESS_VMBC) == false ) {
    verified = false;
    console.log("Before running this sample, update the CONTRACT_ADDRESS_VMBC as instructed in README")
  }
  if (verifyPrivateKeyChanged(private_key1_vmbc) == false) {
    verified = false;
    console.log("Before running this sample, update the private_key1_vmbc as instructed in README")
  }
  if (verified == false) {
    console.log("Make neessary changes before running the sample");
    process.exit(1);
  }
}

function verifyContractAddressChanged(contract_address) {
  if (contract_address === "Change-this-to-Contract-Address-of-Greetings-Contract") {
    return false;
  }
}

function verifyPrivateKeyChanged(private_key) {
  if (private_key === "Change-this-to-Contract-Address-of-Greetings-Contract") {
    return false;
  }
}