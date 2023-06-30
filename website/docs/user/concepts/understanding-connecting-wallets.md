---
title: 'Connecting & Registering Wallets'
slug: './understanding-connecting-wallets'
sidebar_position: 102
image: 'img/thumbs/social-square-1.png'
---

# Introduction
DexText gives you the ability to facilitate secure, private conversations linked to any of your blockchain addresses through a unified inbox. By registering your blockchain address, you can start sending and receiving encrypted messages via that address.

Use cases include facilitating private, secure conversations based on your on-chain identities. You can send messages from a specific address, and recipients can verify that the message originated from that address.

## How it works
Your DexText account uses your existing wallet key, which is used to encrypt and decrypt messages. When you register an existing blockchain wallet address, you prove that you own it by signing a message of confirmation.

This generates a verifiable proof without requiring a blockchain transaction or gas fee. Your private key stays within your wallet and never leaves your device.

When someone sends a message to your address, the application retrieves the IPFS hash of the encrypted message corresponding to your address from the Ethereum network.

## Bob and Alice use case example
Bob wants to send a private message to Alice using the Ethereum address she used when she bought his last NFT. Alice has registered her Ethereum address in DexText by signing a message confirming ownership with her wallet. Bob sends a message to Alice's address. In the background, the DexText application encrypts Bob's message with Alice's public key, stores the encrypted message on IPFS, and records the IPFS hash on the Ethereum network.

When Alice opens her inbox, she sees a message from Bob sent to her Ethereum address. Alice's wallet key is used by the application to decrypt the message body, but the private key information is never revealed.

Bob has no way of knowing whether Alice has linked any other address to her DexText unified inbox.

When Bob receives a reply from Alice, he can check that the message truly came from Alice's Ethereum address without knowing anything else about Alice's identity.
Alice never had to enter any sensitive information into DexText, and she retains full control and ownership of her private keys for encryption and decryption.

## Further Information
You can find more information on registering and removing wallets here:

-   [How to register a wallet](/user/guides/getting-started/register-a-wallet)
-   [How to remove a wallet](/user/guides/settings/remove-registered-address)
