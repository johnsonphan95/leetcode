// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
  const seen = {};
  let res;
  for (let i = 0; i < s.length; i++) {
    if (!seen[s[i]]) seen[s[i]] = 0;
    seen[s[i]] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] === 1) return i;
  }
  return -1;
};
