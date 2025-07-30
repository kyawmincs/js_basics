const readlineSync = require('readline-sync');
const SQUARE_FEET_CONVERSION = 10.7639;

function areaCalculator() {
  let length = parseInt(
    readlineSync.question('Enter the length of the room in meters:\n'),
    10,
  );
  let width = parseInt(
    readlineSync.question('Enter the width of the room in meters:\n'),
    10,
  );
  let areaSQMeter = length * width;
  let areaSQFeet = areaSQMeter * SQUARE_FEET_CONVERSION;
  console.log(
    `The area of the room is ${areaSQMeter.toFixed(
      2,
    )} square meters (${areaSQFeet.toFixed(2)} square feet).`,
  );
}

areaCalculator();
