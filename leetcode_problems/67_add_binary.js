// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let res = "";
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = bitA + bitB + carry;
    res = `{sum%2}${res}`;
    carry = Math.floor(sum / 2);
    i--;
    j++;
  }
  return res;
};
