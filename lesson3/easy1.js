// Your code goes here
function crunch(stringInput) {
  let length = stringInput.length;
  let uniqueString = '';

  if (length < 1) {
    return uniqueString;
  }

  let lastChar;
  for (let i = 0; i < length; i++) {
    if (stringInput[i] !== lastChar) {
      uniqueString += stringInput[i];
      lastChar = stringInput[i];
    }
  }

  return uniqueString;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
