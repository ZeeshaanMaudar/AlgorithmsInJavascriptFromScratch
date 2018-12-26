isPalindrome = (str) => {
  let newStr = str.toLowerCase();
  let newArr = newStr.split('');
  let validCharactersArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lettersArr = [];
  newArr.forEach(char => {
    if(validCharactersArr.indexOf(char) >= 0 ) lettersArr.push(char);
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

// isPalindrome('Race Car');
isPalindrome("Madam I'm Adam");
