// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

var reverse = function(x) {
  if (x === 0) return 0
  
  const sign = x < 0 ? -1 : 1
  let reverse = 0 
  let temp = Math.abs(x)
  
  while (true) {
      reverse += temp % 10
      temp = Math.floor(temp / 10)
      if (temp === 0) break
      reverse *= 10
  }
  
  reverse *= sign
  
  if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) {
      return 0
  }
  
  return reverse
};