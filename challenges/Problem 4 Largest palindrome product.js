// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  const max = parseInt('9'.repeat(n));
  let min = parseInt('1' + '0'.repeat(n - 1))

  let maxP = 0;
  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      const product = i * j;
      if (product <= maxP) break;
      if (isPalindrome(product)) maxP = product;
    }
  }
  return maxP;
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

largestPalindromeProduct(2);