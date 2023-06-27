DexText Smart Contract
This repository contains the smart contract for DexText, an encrypted messaging system built on the Ethereum blockchain. The contract is written in Solidity and uses OpenZeppelin's upgradeable contracts for security and upgradeability.

Contract Overview
The DexText.sol contract allows users to send and receive encrypted messages. Messages are stored in IPFS, and only the hash of the message is stored on-chain. This design ensures that the contract is scalable and cost-efficient, as storing large amounts of data on-chain can be expensive.

The contract includes features such as:

Sending messages: Users can send messages to each other. The message is stored in IPFS, and the IPFS hash is stored on-chain.
Reading messages: Only the recipient of a message can mark it as read.
Replying to messages: Messages can be linked in a thread, allowing users to reply to each other.
Pausing the contract: The contract owner can pause the contract, preventing any messages from being sent or read.
Getting Started
To interact with the contract, you will need to have an Ethereum wallet set up. You can then use a library like ethers.js or web3.js to interact with the contract.

Security
This contract uses OpenZeppelin's upgradeable contracts. This means that the contract can be upgraded without requiring users to migrate their data to a new contract. It also includes security features like a reentrancy guard and a pausable mechanism.

Contributing
Contributions are welcome! Please feel free to submit a pull request.