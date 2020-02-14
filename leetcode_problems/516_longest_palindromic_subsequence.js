// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input:

// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".
// Example 2:
// Input:

// "cbbd"
// Output:
// 2

var longestPalindromeSubseq = function(s) {
  if(s.length === 0 || s === null) return 0;
  const len = s.length;
  const dp = Array(len).fill(null).map(() => Array(len).fill(0))
  console.log(dp)
  return helper(0,len-1)

  function helper(i,j){
      if(i>j) return dp[i][j] = 0;
      if(dp[i][j] !== 0) return dp[i][j];
      if(i==j) return dp[i][j] = 1;
      if(s.charAt(i) === s.charAt(j)) {
          return dp[i][j] = helper(i + 1, j - 1) + 2;
      }
      else {
          return dp[i][j] = Math.max(helper(i + 1, j), helper(i, j - 1));
      }
  }
}