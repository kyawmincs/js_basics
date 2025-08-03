function crunch(inputString) {
  let noDuplicateString = '';
  let lastCharacter = '';

  for (let index = 0; index < inputString.length; index++) {
    if (lastCharacter !== inputString[index]) {
      noDuplicateString += inputString[index];
      lastCharacter = inputString[index];
    }
  }

  return noDuplicateString;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('aabaa')); // "aba"
console.log(crunch('hhhhhhiiiiiii ggggiiirrrlllyyyyyyyyyyyy')); // "hi girly"
console.log(crunch('bbeeaacchh')); // "beach"
console.log(crunch('')); // ""
