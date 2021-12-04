const { readNumbersFromFile } = require('./utils');

function countDepthIncreases(depthReadings) {
  let previousReading = null;
  let increases = 0;
  depthReadings.forEach((reading) => {
    if (previousReading != null) {
      if (reading > previousReading) {
        increases += 1;
      }
    }
    previousReading = reading;
  });
  return increases;
}

function countDepthIncreasesWithSlidingWindow(depthReadings) {
  const previousReadings = [];
  let increases = 0;
  depthReadings.forEach((reading) => {
    if (previousReadings.length === 3) {
      const previousWindowSum = previousReadings[0] + previousReadings[1] + previousReadings[2];
      const currentWindowSum = previousReadings[1] + previousReadings[2] + reading;
      if (currentWindowSum > previousWindowSum) {
        increases += 1;
      }
    }
    previousReadings.push(reading);
    while (previousReadings.length > 3) {
      previousReadings.shift();
    }
  });
  return increases;
}

function runDay01() {
  const depthReadings = readNumbersFromFile(`${__dirname}/input/day01.txt`);
  console.log(`Day 1, part 1: ${countDepthIncreases(depthReadings)}`);
  console.log(`Day 1, part 2: ${(countDepthIncreasesWithSlidingWindow(depthReadings))}`);
}

module.exports = {
  countDepthIncreases,
  countDepthIncreasesWithSlidingWindow,
  runDay01,
};
