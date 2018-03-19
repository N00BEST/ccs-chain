const Block = require('./block');

describe('Block', () => {
  let data;
  let lastBlock;
  let block;

  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('Sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
  });

  it('sets the `previousHash` to match the hash of the previous block', () => {
    expect(block.previousHash).toEqual(lastBlock.hash);
  });
});
