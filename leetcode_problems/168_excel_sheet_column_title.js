// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"

var convertToTitle = function(n) {
  let res = "";
  
  while (n > 0) {
      n--; 
      res = String.fromCharCode(65 + n % 26) + res; 
      n = Math.floor(n / 26)
  }
  return res;
};