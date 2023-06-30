import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { abi } from "./contractABI";

const contractAddress = "0x1234567890123456789012345678901234567890";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contract = new Contract(contractAddress, abi, signer);

const ReadMessage = () => {
  const [messageId, setMessageId] = useState(0);
  const [message, setMessage] = useState("");
  const [markAsRead, setMarkAsRead] = useState(false);

  useEffect(() => {
    fetchMessage();
  }, [messageId, markAsRead]);

  const fetchMessage = async () => {
    try {
      const ipfsHash = await contract.readMessage(messageId);
      const message = await fetchMessageFromIPFS(ipfsHash);
      setMessage(message);

      if (markAsRead) {
        await contract.markAsRead(messageId);
      }
    } catch (error) {
      console.error("Failed to fetch message:", error);
    }
  };

  const fetchMessageFromIPFS = async (ipfsHash) => {
    // Replace with your IPFS fetch function
    return ipfsHash;
  };

  return (
    <div>
      <input
        type="number"
        value={messageId}
        onChange={(event) => setMessageId(parseInt(event.target.value))}
        min="0"
        step="1"
      />
      <button onClick={fetchMessage}>Read Message</button>
      <input
        type="checkbox"
        checked={markAsRead}
        onChange={(event) => setMarkAsRead(event.target.checked)}
      />
      Mark as read
      <p>{message}</p>
    </div>
  );
};

export default ReadMessage;
