const { assert } = require('chai');
const { describe } = require('mocha');
const { countDepthIncreases, countDepthIncreasesWithSlidingWindow, readDepthReadingsFromFile } = require('../src/day01/sonar-sweep');

const testReadings = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
];

describe('loadDepthReadingsFromFile', () => {
  it('Loads readings from a file with one reading per line', () => {
    const readings = readDepthReadingsFromFile(`${__dirname}/fixtures/testReadings.txt`);
    assert.deepEqual(readings, testReadings);
  });
});

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
