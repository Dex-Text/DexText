const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EncryptedMessaging contract", function () {
  let EncryptedMessaging;
  let encryptedMessaging;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    EncryptedMessaging = await ethers.getContractFactory("EncryptedMessaging");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    encryptedMessaging = await EncryptedMessaging.deploy();
    await encryptedMessaging.deployed();

    // Call the initialize function of the contract
    await encryptedMessaging.initialize();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await encryptedMessaging.owner()).to.equal(owner.address);
    });
  });

  describe("sendMessage", function () {
    it("Should send a message", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      const message = await encryptedMessaging.getMessage(0);
      expect(message.sender).to.equal(owner.address);
      expect(message.recipient).to.equal(addr1.address);
      expect(message.ipfsHash).to.equal(ethers.utils.formatBytes32String("Hello"));
    });

    it("Should emit a MessageSent event", async function () {
      await expect(encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0))
        .to.emit(encryptedMessaging, "MessageSent")
        .withArgs(0, owner.address, addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
    });
  });

  describe("markAsRead", function () {
    it("Should mark a message as read", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      await encryptedMessaging.connect(addr1).markAsRead(0);
      const message = await encryptedMessaging.getMessage(0);
      expect(message.readStatus).to.equal(true);
    });

    it("Should emit a MessageRead event", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      await expect(encryptedMessaging.connect(addr1).markAsRead(0))
        .to.emit(encryptedMessaging, "MessageRead")
        .withArgs(0, addr1.address);
    });
  });

  describe("getMessage", function () {
    it("Should return a message", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      const message = await encryptedMessaging.getMessage(0);
      expect(message.sender).to.equal(owner.address);
      expect(message.recipient).to.equal(addr1.address);
      expect(message.ipfsHash).to.equal(ethers.utils.formatBytes32String("Hello"));
    });
  });

  describe("getMessages", function () {
    it("Should return multiple messages", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      await encryptedMessaging.sendMessage(addr2.address, ethers.utils.formatBytes32String("World"), 0);
      const messages = await encryptedMessaging.getMessages(0, 2);
      expect(messages[0].sender).to.equal(owner.address);
      expect(messages[0].recipient).to.equal(addr1.address);
      expect(messages[0].ipfsHash).to.equal(ethers.utils.formatBytes32String("Hello"));
      expect(messages[1].sender).to.equal(owner.address);
      expect(messages[1].recipient).to.equal(addr2.address);
      expect(messages[1].ipfsHash).to.equal(ethers.utils.formatBytes32String("World"));
    });
  });

  describe("getUserMessageIds", function () {
    it("Should return all message IDs for a user", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("World"), 0);
      const messageIds = await encryptedMessaging.getUserMessageIds(addr1.address);
      expect(messageIds.length).to.equal(2);
      expect(messageIds[0]).to.equal(0);
      expect(messageIds[1]).to.equal(1);
    });
  });

  describe("getMessageCount", function () {
    it("Should return the total number of messages", async function () {
      await encryptedMessaging.sendMessage(addr1.address, ethers.utils.formatBytes32String("Hello"), 0);
      await encryptedMessaging.sendMessage(addr2.address, ethers.utils.formatBytes32String("World"), 0);
      const messageCount = await encryptedMessaging.getMessageCount();
      expect(messageCount).to.equal(2);
    });
  });

  describe("pause and unpause", function () {
    it("Should pause and unpause the contract", async function () {
      await encryptedMessaging.pause();
      expect(await encryptedMessaging.paused()).to.equal(true);
      await encryptedMessaging.unpause();
      expect(await encryptedMessaging.paused()).to.equal(false);
    });
  });
});
