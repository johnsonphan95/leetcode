// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
// Example 3:

// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

var repeatedSubstringPattern = function(s) { 
  let median = Math.floor(s.length / 2);
  let cur;
  let multiple;
  
  for (let i = 1; i <= median; i++) {
      cur = s.slice(0, i);
      multiple = Math.floor(s.length / cur.length);
      
      if (cur.repeat(multiple) === s) {
          return true;
      }
  }
  
  return false;
};