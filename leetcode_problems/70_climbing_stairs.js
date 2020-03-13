// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// DP
var climbStairs = function(n) {
  if (n === 1) return 1;
  
  const dp = [1, 2];
  
  for (let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n - 1]
};

// Fibonacci
var climbStairs = function(n) {
  if (n === 1) return 1;
  
  let first = 1; 
  let second = 2; 
  let third;
  for (i = 2; i < n; i++) {
      third = first + second;
      first = second; 
      second = third
  }
  
  return second;
};