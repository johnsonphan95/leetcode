// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Example 1:

// Input: [1,2,3,4,5]
// Output: true
// Example 2:

// Input: [5,4,3,2,1]
// Output: false

var increasingTriplet = function(nums) {
  if (!nums || nums.length < 3) return false;
  
  let small = nums[0]; 
  let middle = Infinity; 
  
  // nums[i] represents the third or largest number of the triplet
  for (let i = 1; i < nums.length; i++){
      if (nums[i] > small && nums[i] < middle) middle = nums[i];
      if (nums[i] < small) small = nums[i]
      if (nums[i] > middle) return true;
  }
  return false;
};
