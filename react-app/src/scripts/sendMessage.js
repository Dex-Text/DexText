import React, { useState } from "react";
import ipfsClient from "ipfs-http-client";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { abi } from "./contractABI";

// Initialize IPFS client
const ipfs = ipfsClient({ host: "ipfs.infura.io", port: "5001", protocol: "https" });

// Replace with actual contract address
const contractAddress = "0x1234567890123456789012345678901234567890";

// Initialize Ethereum provider and signer
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Initialize contract instance
const contract = new Contract(contractAddress, abi, signer);

const ChatForm = () => {
  const [message, setMessage] = useState("");

  /**
   * Handle form submission
   * @param {Event} event - The form submission event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Encrypt the message
    const encryptedMessage = encryptMessage(message);

    // Add the encrypted message to IPFS
    const ipfsHash = await addMessageToIPFS(encryptedMessage);

    // Send the IPFS hash to the contract
    const tx = await contract.sendMessage(ipfsHash, { gasLimit: 300000 });

    console.log(tx);
  };

  /**
   * Encrypt the message
   * @param {string} message - The message to encrypt
   * @returns {string} The encrypted message
   */
  const encryptMessage = (message) => {
    // Replace with your encryption function
    return message;
  };

  /**
   * Add a message to IPFS
   * @param {string} message - The message to add to IPFS
   * @returns {Promise<string>} The IPFS hash of the message
   */
  const addMessageToIPFS = async (message) => {
    const { cid } = await ipfs.add(message);
    return ethers.utils.formatBytes32String(cid.string);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
