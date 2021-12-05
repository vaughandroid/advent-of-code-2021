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

function runDay03() {
  const { bits, values } = readBinaryNumbersFromFile(`${__dirname}/input/day03.txt`);
  const result = calculatePowerConsumption(bits, values);
  console.log(`Day 3, part 1: gamma=${result.gamma} epsilon=${result.epsilon} consumption=${result.consumption}`);
}

module.exports = {
  calculatePowerConsumption,
  runDay03,
};
