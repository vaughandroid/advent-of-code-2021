const fs = require('fs');

function readDepthReadingsFromFile(path) {
  return fs.readFileSync(path).toString().split('\n')
    .filter((reading) => reading !== '')
    .map((reading) => +reading);
}

function countDepthIncreases(depthReadings) {
  let lastReading = null;
  let increases = 0;
  depthReadings.forEach((reading) => {
    if (lastReading != null) {
      if (reading > lastReading) {
        increases += 1;
      }
    }
    lastReading = reading;
  });
  return increases;
}

module.exports = {
  readDepthReadingsFromFile,
  countDepthIncreases,
};
