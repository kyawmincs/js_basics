function multisum(numInput) {
  if (numInput < 3) return 0;

  if (numInput % 3 === 0 || numInput % 5 === 0) {
    return numInput + multisum(numInput - 1);
  } else {
    return multisum(numInput - 1);
  }
}
