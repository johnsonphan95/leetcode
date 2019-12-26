// Given an unsorted integer array, find the smallest missing positive integer.

var firstMissingPositive = function(nums) {
  let i = 0,
    j,
    tmp;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (j >= 0 && j < nums.length && nums[j] != j + 1) {
      tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    } else {
      i++;
    }
  }
  i = 0;
  while (i < nums.length && nums[i] == i + 1) i++;
  return i + 1;
};
