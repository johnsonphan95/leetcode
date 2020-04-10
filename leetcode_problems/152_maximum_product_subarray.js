// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
// Accepted

// Kadane's Algorithm

// O(N) time O(1) space
var maxProduct = function(nums) {
  let min = 1; 
  let max = 1; 
  let ans = -Infinity; 
  
  for (let i = 0; i < nums.length; i++) {
      let prevMin = min; 
      min = Math.min(nums[i], nums[i] * prevMin, nums[i] * max);
      max = Math.max(nums[i], nums[i] * prevMin, nums[i] * max);
      ans = Math.max(ans, max);
  }
  
  return ans;
};
