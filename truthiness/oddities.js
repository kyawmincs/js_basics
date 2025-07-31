function oddities(inputArray) {
  let oddArray = [];
  for (let i = 0; i < inputArray.length; i += 2) {
    oddArray.push(inputArray[i]);
  }
  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(['abc', 'def'])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
