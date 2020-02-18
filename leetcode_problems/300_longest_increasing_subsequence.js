// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.

var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  
  const dp = new Array(nums.length).fill(1);
  
  for (let j = 1; j < dp.length; j++) {
      for (let i = 0; i < j; i++) {
          if (nums[i] < nums[j]) {
              dp[j] = Math.max(dp[j], 1 + dp[i]);
          }
      }
  }

  return Math.max(...dp)
};