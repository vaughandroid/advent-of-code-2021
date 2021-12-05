const { assert } = require('chai');
const { before, describe, it } = require('mocha');
const { readBinaryNumbersFromFile } = require('../src/utils');
const { calculatePowerConsumption, calculateLifeSupportRatings } = require('../src/day03');

const { bits, values } = readBinaryNumbersFromFile(`${__dirname}/input/day03.txt`);

describe('calculatePowerConsumption', () => {

  let result;

  before(() => {
    result = calculatePowerConsumption(bits, values);
  });

  it('Calculates the gamma', () => {
    assert.equal(result.gamma, 22);
  });

  it('Calculates the epsilon', () => {
    assert.equal(result.epsilon, 9);
  });

  it('Calculates the consumption', () => {
    assert.equal(result.consumption, 198);
  });
});

describe('calculateLifeSupportRating', () => {
  let result;

  before(() => {
    result = calculateLifeSupportRatings(bits, values);
  });

  it('Calculates the oxygen rating', () => {
    assert.equal(result.oxygenRating, 23);
  });

  it('Calculates the CO2 scrubber rating', () => {
    assert.equal(result.co2ScrubberRating, 10);
  });

  it('Calculates the life support rating', () => {
    assert.equal(result.oxygenRating, 230);
  });
});
