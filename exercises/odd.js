function isOdd(inputNum) {
  return Math.abs(inputNum) % 2 === 1 ? true : false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Print all odd numbers
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// Print all even numbers
for (let i = 2; i < 100; i += 2) {
  console.log(i);
}
