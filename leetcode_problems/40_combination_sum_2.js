// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

var combinationSum2 = function(candidates, target) {
  if (!candidates.length || !candidates) return [];

  candidates.sort((a, b) => a - b);
  const result = [];

  const dfs = (curr, start, sum) => {
    if (sum === target) result.push(curr);

    for (let i = start; i < candidates.length; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) continue;
      if (sum + candidates[i] > target) continue;
      dfs(curr.concat(candidates[i]), i + 1, sum + candidates[i]);
    }
  };
  dfs([], 0, 0);
  return result;
};
