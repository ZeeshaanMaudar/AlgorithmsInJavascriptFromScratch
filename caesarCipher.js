caesarCipher = (str, num) => {
  num = num % 26;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lowerCaseStr = str.toLowerCase();
  let newStr = '';

  for (let i = 0; i < lowerCaseStr.length; i ++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ') {
      newStr = newStr + currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if(str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}

caesarCipher("zoo keeper", 30);
