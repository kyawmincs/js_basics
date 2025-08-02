const readLineSync = require('readline-sync');

function integerAllOperations() {
  let num1 = parseInt(readLineSync.question('==> Enter the first number:\n'));
  let num2 = parseInt(readLineSync.question('==> Enter the second number:\n'));

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${BigInt(num1) ** BigInt(num2)}`);
}

integerAllOperations();
