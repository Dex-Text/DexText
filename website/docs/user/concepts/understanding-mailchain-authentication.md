---
title: 'Authentication In Mailchain'
slug: './understanding-mailchain-authentication'
sidebar_position: 101
image: 'img/thumbs/social-square-1.png'
---

# Introduction

Your DexText account is your new decentralized identity.

You can use it for communicating with other DexText users or any blockchain addresses. Your identity is yours. Nobody, not even DexText, has access to it. When you create a DexText account, two things happen:

1. Your blockchain wallet address that you use to register is linked to your identity (which is safeguarded by your private key).
2. You create a secure environment to keep your messages, registered addresses, and other application data.

## Your Private Key

Your private key is a crucial element that gives you access to your blockchain wallet and subsequently your DexText identity.

If you lose this, you may not be able to recover your account. It's crucial to store a copy of it somewhere safe (for example a hardware wallet, password manager, or written down and locked away).

## Your Secure Environment

Your data is encrypted with a key derived from your private key. This key never leaves your device unencrypted. Your encrypted messages are stored on the IPFS network and the hash is recorded on the blockchain. No sensitive data is stored on DexText servers.

## Important considerations

### What happens if I lose my private key?

If you lose your private key, you will lose access to your blockchain wallet and subsequently your DexText account. It is crucial to keep a secure and accessible copy of your private key.

### What happens if I suspect my private key has been compromised?

Any user who suspects their private key has been compromised should transfer their assets to a new blockchain wallet immediately. After creating a new blockchain wallet, they should register the new wallet address with their DexText account. Any new messages will now be linked to the new wallet address. Remember, your private key is crucial to your blockchain wallet and should be kept secure at all times.
