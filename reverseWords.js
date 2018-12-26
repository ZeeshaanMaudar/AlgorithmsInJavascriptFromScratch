reverseWords = (str) => {
  let arr = str.split(' ');
  let reversedStrArr = [];
  arr.forEach(word => {
    let reversedStr = '';
    for (i = word.length - 1; i >= 0; i--) {
      reversedStr += word[i]
    }
    reversedStrArr.push(reversedStr)
  });
  console.log(reversedStrArr.join(' '))
  return reversedStrArr.join(' ');
}

reverseWords("Coding Javascript");
