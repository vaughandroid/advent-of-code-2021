/* eslint-disable no-bitwise */
const { readBinaryNumbersFromFile } = require('./utils');

function countSetBits(bits, readings) {
  const setBitCounts = new Array(bits).fill(0);
  readings.forEach((reading) => {
    for (let i = 0; i < bits; i += 1) {
      setBitCounts[i] += (reading >> i) & 1;
    }
  });
  return setBitCounts;
}

function calculateGammaFromReadings(bits, readings) {
  const setBitCounts = countSetBits(bits, readings);
  const threshold = readings.length / 2;

  let result = 0;
  for (let i = 0; i < bits; i += 1) {
    const bit = (setBitCounts[i] > threshold) ? 1 : 0;
    result |= (bit << i);
  }
  return result;
}

function calculateEpsilonFromGamma(bits, gamma) {
  const xorValue = parseInt(new Array(bits).fill(1).join(''), 2);
  return gamma ^ xorValue;
}

function calculatePowerConsumption(bits, readings) {
  const gamma = calculateGammaFromReadings(bits, readings);
  const epsilon = calculateEpsilonFromGamma(bits, gamma);
  const consumption = gamma * epsilon;
  return {
    gamma,
    epsilon,
    consumption,
  };
}

function calculateOxygenRating(readings, bits) {
  let filteredReadings = readings;
  for (let i = bits - 1; i >= 0; i -= 1) {
    const setBitCounts = countSetBits(i + 1, filteredReadings);
    const threshold = filteredReadings.length / 2;
    const mostCommonValue = (setBitCounts[i] >= threshold) ? 1 : 0;
    filteredReadings = filteredReadings
      .filter((reading) => ((reading >> i) & 1) === mostCommonValue);

    if (filteredReadings.length === 1) {
      return filteredReadings[0];
    }
  }
  throw new Error(`Failed to reduce to a single value. Remaining values: ${filteredReadings}`);
}

function calculateCO2ScrubberRating(readings, bits) {
  let filteredReadings = readings;
  for (let i = bits - 1; i >= 0; i -= 1) {
    const setBitCounts = countSetBits(i + 1, filteredReadings);
    const threshold = filteredReadings.length / 2;
    const leastCommonValue = (setBitCounts[i] < threshold) ? 1 : 0;
    filteredReadings = filteredReadings
      .filter((reading) => ((reading >> i) & 1) === leastCommonValue);

    if (filteredReadings.length === 1) {
      return filteredReadings[0];
    }
  }
  throw new Error(`Failed to reduce to a single value. Remaining values: ${filteredReadings}`);
}

function calculateLifeSupportRatings(bits, readings) {
  const oxygenRating = calculateOxygenRating(readings, bits);
  const co2ScrubberRating = calculateCO2ScrubberRating(readings, bits);
  const lifeSupportRating = oxygenRating * co2ScrubberRating;

  return {
    oxygenRating,
    co2ScrubberRating,
    lifeSupportRating,
  };
}

function runDay03() {
  const { bits, values } = readBinaryNumbersFromFile(`${__dirname}/input/day03.txt`);
  const powerConsumption = calculatePowerConsumption(bits, values);
  console.log(`Day 3, part 1: gamma=${powerConsumption.gamma} epsilon=${powerConsumption.epsilon} consumption=${powerConsumption.consumption}`);
  const lifeSupport = calculateLifeSupportRatings(bits, values);
  console.log(`Day 3, part 2: oxygen=${lifeSupport.oxygenRating} co2=${lifeSupport.co2ScrubberRating} lifeSupport=${lifeSupport.lifeSupportRating}`);
}

module.exports = {
  calculatePowerConsumption,
  calculateLifeSupportRatings,
  runDay03,
};
