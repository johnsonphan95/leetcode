// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

const combinationSum = (nums, target) => {
  let result = [];

  const dfs = (curr, startIndex, currSum) => {
    if (currSum === target) {
      result.push(curr);
      return;
    }
    if (currSum > target) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      dfs(curr.concat(nums[i]), i, currSum + nums[i]);
    }
  };
  dfs([], 0, 0);
  return result;
};
