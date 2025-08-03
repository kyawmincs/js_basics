const readlineSync = require('readline-sync');

function sumUntilNum(n) {
  if (n < 1) return 0;
  return n + sumUntilNum(n - 1);
}

function productUntilNum(n) {
  if (n < 1) return 1;
  return n * productUntilNum(n - 1);
}

function sumOrProduct() {
  let integerInput;
  do {
    integerInput = parseInt(
      readlineSync.question('Please enter an integer greater than 0:  '),
      10,
    );
  } while (!Number.isInteger(integerInput) || integerInput <= 0);

  let operation = '';
  do {
    operation = readlineSync.question(
      'Enter "s" to compute the sum, or "p" to compute the product. ',
    );
  } while (operation !== 's' && operation !== 'p');

  if (operation === 's') {
    console.log(
      `The sum of the integers between 1 and
       ${integerInput} is ${sumUntilNum(integerInput)}.`,
    );
  } else if (operation === 'p') {
    console.log(
      `The product of the integers between 1 and ${integerInput} is ${productUntilNum(
        integerInput,
      )}.`,
    );
  }
}

sumOrProduct();
