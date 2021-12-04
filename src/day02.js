const { readStringsFromFile } = require('./utils');

function followCourse(commands) {
  let x = 0;
  let y = 0;

  commands.forEach((command) => {
    const [direction, distance] = command.split(' ');
    const distanceNum = +distance;
    switch (direction) {
      case 'forward': {
        x += distanceNum;
        break;
      }
      case 'up': {
        y -= distanceNum;
        break;
      }
      case 'down': {
        y += distanceNum;
        break;
      }
      default: {
        console.log(`Unknown direction: ${direction}`);
      }
    }
  });

  return {
    x,
    y,
  };
}

function followCourseV2(commands) {
  let x = 0;
  let y = 0;
  let aim = 0;

  commands.forEach((command) => {
    const [direction, distance] = command.split(' ');
    const distanceNum = +distance;
    switch (direction) {
      case 'forward': {
        x += distanceNum;
        y += aim * distanceNum;
        break;
      }
      case 'up': {
        aim -= distanceNum;
        break;
      }
      case 'down': {
        aim += distanceNum;
        break;
      }
      default: {
        console.log(`Unknown direction: ${direction}`);
      }
    }
  });

  return {
    x,
    y,
  };
}

function runDay02() {
  const commands = readStringsFromFile(`${__dirname}/input/day02.txt`);
  const finalPosition = followCourse(commands);
  console.log(`Day 1, part 1: horizontal=${finalPosition.x} depth=${finalPosition.y} answer=${finalPosition.x * finalPosition.y}`);
  const finalPositionV2 = followCourseV2(commands);
  console.log(`Day 1, part 2: horizontal=${finalPositionV2.x} depth=${finalPositionV2.y} answer=${finalPositionV2.x * finalPositionV2.y}`);
}

module.exports = {
  followCourse,
  followCourseV2,
  runDay02,
};
