const readlineSync = require('readline-sync');

function calcRetirement() {
  let userAge = parseInt(readlineSync.question('What is your age? '));
  let retireAge = parseInt(
    readlineSync.question('At what age would you like to retire? '),
  );
  let timeGap = retireAge - userAge;
  let date = new Date();
  date.getFullYear();

  console.log(
    `It's ${date.getFullYear()}. You will retire in ${
      date.getFullYear() + timeGap
    }.`,
  );
  console.log(`You have only ${timeGap} years of work to go!`);
}

calcRetirement();
