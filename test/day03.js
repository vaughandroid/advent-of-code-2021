const { assert } = require('chai');
const { describe } = require('mocha');
const { readBinaryNumbersFromFile } = require('../src/utils');
const { calculatePowerConsumption } = require('../src/day03');

const { bits, values } = readBinaryNumbersFromFile(`${__dirname}/input/day03.txt`);

describe('calculatePowerConsumption', () => {
  it('Counts the number of times a depth measurement increases', () => {
    const result = calculatePowerConsumption(bits, values);
    assert.equal(result.gamma, 22);
    assert.equal(result.epsilon, 9);
    assert.equal(result.consumption, 198);
  });
});
