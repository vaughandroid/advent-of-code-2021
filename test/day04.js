const { assert } = require('chai');
const { before, describe, it } = require('mocha');
const { readStringsFromFile } = require('../src/utils');
const { calculateBingoWinner } = require('../src/day04');

const input = readStringsFromFile(`${__dirname}/input/day04.txt`);

describe('calculateBingoWinner', () => {
  let result;

  before(() => {
    result = calculateBingoWinner(input);
  });

  it('Calculates the sum of all unmarked numbers', () => {
    assert.equal(result.sumOfUnmarkedNumbers, 188);
  });

  it('Reports the last number called', () => {
    assert.equal(result.sumOfUnmarkedNumbers, 24);
  });

  it('Calculates the final score', () => {
    assert.equal(result.finalScore, 4512);
  });
});
