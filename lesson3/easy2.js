// Your code goes here
function twice(numInput) {
  let nonDoubleResult = Number(numInput) * 2;

  if (String(numInput).length % 2 !== 0) {
    return nonDoubleResult;
  } else {
    let half = String(numInput).length / 2;
    if (String(numInput).slice(half) === String(numInput).slice(-1 * half)) {
      return Number(numInput);
    } else {
      return nonDoubleResult;
    }
  }
}

console.log(twice(37)); // 74
twice(44); // 44
console.log(twice(334433)); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
