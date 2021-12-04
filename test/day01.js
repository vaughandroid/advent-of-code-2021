const { assert } = require('chai');
const { describe } = require('mocha');
const { readNumbersFromFile } = require('../src/utils');
const { countDepthIncreases, countDepthIncreasesWithSlidingWindow } = require('../src/day01');

const testReadings = readNumbersFromFile(`${__dirname}/input/day01.txt`);

describe('countDepthIncreases', () => {
  it('Counts the number of times a depth measurement increases', () => {
    const result = countDepthIncreases(testReadings);
    assert.equal(result, 7);
  });
});

describe('countDepthIncreasesWithSlidingWindow', () => {
  it('Counts the number of times a depth measurement increases', () => {
    const result = countDepthIncreasesWithSlidingWindow(testReadings);
    assert.equal(result, 5);
  });
});
