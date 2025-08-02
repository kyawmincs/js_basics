const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Takes an operation number and logs the calculated operation output
function processOperation(operation, number1, number2) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`The result is: ${output}`);
}

function getValidNumber(askString) {
  prompt(askString);
  let num = readline.question();
  while (invalidNumber(num)) {
    prompt(MESSAGES.en.badNumAttempt);
    num = readline.question();
  }
  return num;
}

function getValidOperation(askString) {
  prompt(askString);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.en.badOperationAttempt);
    operation = readline.question();
  }
  return operation;
}

function askAnotherCalc(askString) {
  prompt(askString);
  let answer = readline.question();
  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt(MESSAGES.en.badAnotherAttempt);
    answer = readline.question();
  }
  return answer;
}

// Main loop
let anotherCalc;
prompt(MESSAGES.en.welcome);

do {
  let number1 = getValidNumber(MESSAGES.en.askFirstNum);
  let number2 = getValidNumber(MESSAGES.en.askSecondNum);
  let operation = getValidOperation(MESSAGES.en.askOperation);

  processOperation(operation, number1, number2);

  anotherCalc = askAnotherCalc(MESSAGES.en.askAnotherCalc);
} while (anotherCalc.toLowerCase() === 'y');
