const readlineSync = require('readline-sync');

function tipCalculator() {
  let bill = parseFloat(readlineSync.question('What is the bill?  '));
  let tipPercentage = parseInt(
    readlineSync.question('What is the tip percentage?  '),
  );
  let tip = bill * (tipPercentage / 100);
  console.log(`The tip is ${tip.toFixed(2)}`);
  console.log(`The total is ${(tip + bill).toFixed(2)}`);
}

tipCalculator();
