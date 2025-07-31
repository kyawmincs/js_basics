function centerOf(inputString) {
  let middleIndex = -1;
  if (inputString.length % 2 === 0) {
    // Even case
    middleIndex = Math.floor((inputString.length - 1) / 2);
    return inputString[middleIndex] + inputString[middleIndex + 1];
  } else {
    // Odd case
    middleIndex = (inputString.length - 1) / 2;
    return inputString[middleIndex];
  }
}

// let middleIndex = 0;
// if (sentenceArray.length % 2 === 0) {
//   // Even length case
//   // Be careful since index starts from 0 to n-1 length
//   middleIndex = sentenceArray.length / 2 - 1;
//   return sentenceArray[middleIndex] + sentenceArray[middleIndex + 1];
// } else {
//   // Odd length case
//   // Be careful since index starts from 0 to length - 1
//   middleIndex = Math.ceil(sentenceArray.length / 2) - 1;
//   return sentenceArray[middleIndex];
// }

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"
