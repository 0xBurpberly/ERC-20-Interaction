const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0x2103D96afdb9C030a9f6ea7B5dD135F053609caa"; // Replace with your contract address
  const txHash = "0xf51b2515e43817a4d747a0fd48fcc7e7a93508b9e3a822ff689bf0a3b6b10f97"; // Replace with your transaction hash
  const addressToCheck = "0x3732B35ec45E3656Ff752c30F3d1AFbE780b3545"; // Replace with your address

  // Get the contract instance
  const contractFactory = await hre.ethers.getContractFactory("TestToken");
  const contract = contractFactory.attach(contractAddress);

  // Fetch and log the transaction receipt
  const txReceipt = await hre.ethers.provider.getTransactionReceipt(txHash);
  console.log("Transaction Receipt:", txReceipt);

  // Query and log the balance
  const balance = await contract.balanceOf(addressToCheck);
  console.log("Balance:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
