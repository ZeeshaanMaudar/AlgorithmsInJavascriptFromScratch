twoSum = (numArray, sum) => {
  let pairs = [];
  let hashtable = [];

  for(let i = 0; i < numArray.length; i++) {
    let currentNum = numArray[i];
    let counterPart = sum -currentNum;
    hashtable.push(currentNum);

    if(hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currentNum, counterPart]);
    }
  }
  return pairs;
}


twoSum([1,6,4,5,3,3], 7)
