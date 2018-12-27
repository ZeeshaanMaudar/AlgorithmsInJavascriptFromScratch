getMean = arr => {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  })
  let average = sum / arr.length;
  console.log(average)
  return average;
}

getMedian = arr => {
  arr.sort((a, b) => a - b);
  let sumOfMiddles = 0;
  let median = 0;
  if (arr.length % 2 === 0) {
    sumOfMiddles = arr[arr.length/2] + arr[arr.length/2 - 1];
    median = sumOfMiddles / 2;
  } else {
    median = arr[Math.floor(arr.length / 2)];
    console.log(median)
  }
  return median;
}

getMode = arr => {
  let obj =  {};
  
  arr.forEach(index => {
    if(!obj[index]) {
      obj[index] = 0;
    }
    obj[index]++;
  })

  let max = 0;
  let mode = [];

  for(let key in obj) {
    if(obj[key] > max) {
      mode = [key]
      console.log(mode)
      max = obj[key]
    } else if (obj[key] === max) {
      mode.push(key);
    }
  }

  if (mode.length === Object.keys(obj).length) {
    mode = [];
  }
  return mode
}

meanMedianMode = arr => {
  let newObj = {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
  console.log(newObj)
  return newObj;
}

meanMedianMode([2,3,7,9])
// getMean([2,3,7,9])
// getMedian([2,3,7,9,20])
// getMode([2,3,7,9])
