function cleanUp(stringInput) {
  let cleanString = '';

  for (let i = 0; i < stringInput.length; i++) {
    if (stringInput[i].match(/[a-zA-Z]/)) {
      cleanString += stringInput[i];
    } else if (
      cleanString.length >= 0 &&
      cleanString[cleanString.length - 1].match(/[a-zA-Z]/)
    ) {
      cleanString += ' ';
    }
  }

  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));
