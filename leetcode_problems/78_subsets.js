// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nums) {
  const results = [[]];
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    const length = results.length;
    for (let j = 0; j < length; j++) {
      currentSubset = results[j];
      results.push(currentSubset.concat(ele));
    }
  }
  return results;
};
