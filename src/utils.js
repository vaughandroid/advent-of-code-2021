const fs = require('fs');

function readStringsFromFile(path) {
  return fs.readFileSync(path).toString().split('\n')
    .filter((reading) => reading !== '');
}

function readNumbersFromFile(path) {
  return readStringsFromFile(path)
    .map((reading) => +reading);
}

function readBinaryNumbersFromFile(path) {
  const strings = readStringsFromFile(path);
  const values = strings.map((binary) => parseInt(binary, 2));
  return {
    bits: strings[0].length,
    values,
  };
}

module.exports = {
  readStringsFromFile,
  readNumbersFromFile,
  readBinaryNumbersFromFile,
};
