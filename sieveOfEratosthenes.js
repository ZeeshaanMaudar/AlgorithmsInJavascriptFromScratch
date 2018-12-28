sieveOfEratosthenes = (num) => {
  let primes = [];
  for (let i = 0; i <= num; i ++) {
    primes[i] = true
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++ ) {
    for (let j = 2; i * j <= num; j++) {
      primes[i * j] = false;
    }
  }

  let results = [];

  for (let i = 0; i < primes.length; i ++) {
    if(primes[i]) {
      results.push(i)
    }
  }
  return results;
}

sieveOfEratosthenes(20);
 