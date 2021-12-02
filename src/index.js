/* eslint-disable no-console */
const { countDepthIncreases, readDepthReadingsFromFile } = require('./day01/sonar-sweep');

// Day 1, part 1.
const depthReadings = readDepthReadingsFromFile(`${__dirname}/day01/data/readings.txt`);
const depthIncreaseCount = countDepthIncreases(depthReadings);
console.log(depthIncreaseCount);
