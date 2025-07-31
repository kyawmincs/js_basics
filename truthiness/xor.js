function xor(val1, val2) {
  return !!(val1 || val2) && !(val1 && val2);
}

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
