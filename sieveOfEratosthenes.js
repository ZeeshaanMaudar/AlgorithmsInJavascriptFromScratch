sieveOfEratosthenes = (num) => {
  let arr = [];
  for (let i = 0; i <= num; i ++) {
    arr[i] = true
  }

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++ ) {
    for (let j = 2; i * j <= num; j++) {
      arr[i * j] = false;
    }
  }

  let results = [];

  for (let i = 0; i < arr.length; i ++) {
    if(arr[i]) {
      results.push(i)
    }
  }
  return results;
}

sieveOfEratosthenes(20);
