function utf16Value(inputString) {
  return [...inputString].reduce(
    (total, char) => total + char.charCodeAt(0),
    0,
  );
}

// function utf16Value(inputString) {
//   let sum = 0;
//   for (let index = 0; index < inputString.length; index++) {
//     sum += inputString.charCodeAt(index);
//   }
//   return sum;
// }
