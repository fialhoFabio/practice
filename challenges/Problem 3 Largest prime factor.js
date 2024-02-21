// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  for (let i = Math.floor(Math.sqrt(number)); i >= 2; i--) {
    if (number % i === 0 && isPrime(i)) return i;
  }
  return number;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(largestPrimeFactor(600851475143));