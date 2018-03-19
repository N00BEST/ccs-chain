const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(timestamp, previousHash, hash, data){
		this.timestamp = timestamp;
		this.previousHash = previousHash;
		this.hash = hash;
		this.data = data;
	}

	toString() {
		return `Block -
		Timestamp 	: ${this.timestamp}
		Previous Hash   : ${this.previousHash.substring(0, 10)}
		Hash		: ${this.hash.substring(0, 10)}
		Data		: ${this.data}`;
	}

	static genesis() {
		return new this('Genesis Time', '--------------', 'F1R5T-H45H', []);
	}

	static mineBlock(lastBlock, data) {
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = Block.hash(timestamp, lastHash, data);

		return new this(timestamp, lastHash, hash, data);
	}

	static hash(timestamp, lastHash, data){
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}
}

module.exports = Block;
