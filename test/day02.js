const { assert } = require('chai');
const { describe } = require('mocha');
const { readStringsFromFile } = require('../src/utils');
const { followCourse, followCourseV2 } = require('../src/day02');

const testCommands = readStringsFromFile(`${__dirname}/fixtures/testCommands.txt`);

describe('followCourse', () => {
  it('Follows the directions and returns the ending position', () => {
    const finalPosition = followCourse(testCommands);
    assert.equal(finalPosition.x, 15);
    assert.equal(finalPosition.y, 10);
  });
});

describe('followCourseV2', () => {
  it('Follows the directions and returns the ending position', () => {
    const finalPosition = followCourseV2(testCommands);
    assert.equal(finalPosition.x, 15);
    assert.equal(finalPosition.y, 60);
  });
});
