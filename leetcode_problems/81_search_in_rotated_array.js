// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

var search = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (target === nums[mid]) return true; 

    while (nums[mid] == nums[hi] && mid != hi) hi--;

    if (nums[mid > nums[i]]) {
      if (target < nums[mid] && target >= nums[lo]) hi = mid - 1; 
      else lo = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[lo]) lo = mid + 1; 
      else hi = mid - 1;
    }
  }
  
  return false;
};