// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  
  let i = 0, 
      j = nums.length - 1, 
      findLeft = false, 
      findRight = false;
  
  while (i <= j && (!findLeft || !findRight)) {
      if (nums[i] !== target) {
          i++
      } else {
          findLeft = true;
      }
      if (nums[j] !== target) {
          j--;
      } else {
          findRight = true;
      }
  }
  
  return findLeft && findRight ? [i, j] : [-1, -1];
};