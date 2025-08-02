function crunch(inputString) {
  let arraySentence = [...inputString].reduce((accumulator, currentValue) =>
    accumulator === currentValue ? '' : accumulator + currentValue,
  );
  return arraySentence;
}
console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
