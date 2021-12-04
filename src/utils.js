const fs = require('fs');

function readStringsFromFile(path) {
  return fs.readFileSync(path).toString().split('\n')
    .filter((reading) => reading !== '');
}

module.exports = {
  readStringsFromFile,
};
