binarySearch = (numArray, key) => {
  let middleIndex = Math.floor(numArray.length / 2)
  let middleNum = numArray[middleIndex];
  if (middleNum === key) return true;
  else if (middleNum < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex),key);
  } 
  else if (middleNum > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } 
  else {
    return false;
  }
}

binarySearch([5,7,12,16,36,39,42,56,71], 56);
