/* eslint-disable no-console */
const {
  countDepthIncreases,
  readDepthReadingsFromFile,
  countDepthIncreasesWithSlidingWindow
} = require('./day01/sonar-sweep');

const depthReadings = readDepthReadingsFromFile(`${__dirname}/day01/data/readings.txt`);

// Day 1, part 1.
console.log(`Day 1, part 1: ${countDepthIncreases(depthReadings)}`);
// Day 1, part 2.
console.log(`Day 1, part 2: ${(countDepthIncreasesWithSlidingWindow(depthReadings))}`);
