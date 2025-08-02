const PERCENT_TO_DECIMAL = 100;
const MONTHS_IN_YEAR = 12;
const readline = require('readline-sync');

function calculateMonthlyPayment(loanAmount, annualRate, loanDuration) {
  let monthlyRate = annualRate / (PERCENT_TO_DECIMAL * MONTHS_IN_YEAR); // In decimal form
  let monthlyPayment = NaN;
  if (monthlyRate !== 0) {
    monthlyPayment =
      loanAmount *
      (monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanDuration)));
  } else {
    monthlyPayment = loanAmount / loanDuration;
  }

  return monthlyPayment;
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidLoanYearOrMonth(inputYear) {
  return !Number.isInteger(Number(inputYear)) || Number(inputYear) < 0;
}

function getValidLoanAmount() {
  let inputLoanAmount = readline.question(
    'Please enter a positive loan amount ($): ',
  );

  while (invalidNumber(inputLoanAmount) || Number(inputLoanAmount) <= 0) {
    inputLoanAmount = readline.question(
      'Please enter a positive loan amount ($): ',
    );
  }

  return inputLoanAmount;
}

function getValidAPR() {
  let inputAPR = readline.question(
    'Please enter a positive Annual Interest Rate (%):',
  );

  while (invalidNumber(inputAPR) || Number(inputAPR) < 0) {
    inputAPR = readline.question(
      'Please enter a positive Annual Interest Rate (%):',
    );
  }
  return inputAPR;
}

function getValidLoanDuration() {
  let loanYears = readline.question(
    'Please enter loan term in years (enter 0 if less than a year): ',
  );

  while (invalidNumber(loanYears) || invalidLoanYearOrMonth(loanYears)) {
    loanYears = readline.question(
      'Please enter loan term in years (enter 0 if less than a year): ',
    );
  }

  let loanMonths = readline.question(
    'Please enter loan term in months (enter 0 if exact loan term in years): ',
  );

  while (invalidNumber(loanMonths) || invalidLoanYearOrMonth(loanMonths)) {
    loanMonths = readline.question(
      'Please enter loan term in months (enter 0 if exact loan term in years): ',
    );
  }

  return Number(loanMonths) + Number(loanYears * MONTHS_IN_YEAR);
}

// Main loop
console.log('Welcome to the mortgage calculator!');
while (true) {
  let userLoanAmount = getValidLoanAmount();
  let userAPR = getValidAPR();
  let userLoanMonths = getValidLoanDuration();
  let monthlyPayment = calculateMonthlyPayment(
    userLoanAmount,
    userAPR,
    userLoanMonths,
  );
  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  let continueAgain = readline.question(
    "Type 'y' to do another calculation. Any other key to exit: ",
  );

  if (continueAgain.toLowerCase() !== 'y') break;
}
