---
title: 'Security & Encryption'
slug: './understanding-security-and-encryption'
sidebar_position: 108
image: 'img/thumbs/social-square-1.png'
---

# Introduction
DexText centers around your data privacy. The guiding principle behind DexText's design and architecture is that only you should be able to access your private data.

## End-to-End Encryption in Blockchain Context
While end-to-end encryption is a common term in the realm of traditional digital communications, its meaning slightly shifts in the blockchain context due to the unique properties of blockchain and its cryptographic primitives. In traditional messaging systems, end-to-end encryption refers to a mechanism where only the communicating users can read the messages. In transit, the messages are coded to conceal the message content from service providers, hackers, and legal authorities.

When it comes to blockchain systems like DexText, "end-to-end encryption" revolves around a similar principle - ensuring that only the intended recipient(s) can access the information - but the mechanism used is inherently different due to the public nature of blockchains. Here's how it works:

## Encryption in DexText
All messages in DexText are encrypted using the recipient's public key. This means that once a message is encrypted, only the holder of the corresponding private key – the intended recipient – can decrypt and read the message.

The DexText application performs the encryption within your browser before the data is stored, meaning only you, as the intended recipient, can decrypt it. DexText itself doesn't have access to your private keys and therefore cannot decrypt your data, whether it's your messages or the blockchain addresses you use.

Registering a Blockchain Wallet Address
When you register a blockchain wallet address with your DexText account, you're essentially providing the public part of your address, which is used by others to encrypt messages they send to you. This address registration doesn't expose your private keys, ensuring your wallet's security.

## Sending and Receiving Messages
Each time a message is sent via DexText, the sender uses the recipient's public key to encrypt the message. This ensures that only the holder of the corresponding private key can decrypt and read the message.

When a message is sent, it's encrypted and then stored on IPFS. An IPFS hash pointing to the encrypted message is stored on the blockchain, and the recipient can access this hash, retrieve the message from IPFS, and decrypt it using their private key.

## Security Considerations
Despite the public nature of blockchains, the encryption mechanism in DexText ensures that your message content remains confidential. Only the intended recipient, who has the corresponding private key, can decrypt and read the message. Neither DexText nor any third party that doesn't have access to the recipient's private key can decrypt and read the message.