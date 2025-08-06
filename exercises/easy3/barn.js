function LineFiller(endStartChar, textLength, fillingChar) {
  let decoratedLine = endStartChar;

  for (let char = 0; char < textLength; char++) {
    decoratedLine += fillingChar;
  }

  decoratedLine += [...endStartChar].reverse().join('');

  return decoratedLine + '\n';
}

function logInBox(inputString) {
  let box = '';

  // Top of the box
  box += LineFiller('+-', inputString.length, '-');
  box += LineFiller('| ', inputString.length, ' ');

  // Content of the box
  box += '| ' + inputString + ' | \n';

  // Botton of the box
  box += LineFiller('| ', inputString.length, ' ');
  box += LineFiller('+-', inputString.length, '-');

  return box;
}

console.log(logInBox(''));
console.log(logInBox('To boldly go where no one has gone before.'));
