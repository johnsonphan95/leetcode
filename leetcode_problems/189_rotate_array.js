// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// O(N) time & O(N) space
var rotate = function(nums, k) {
  let a = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    a[(i + k) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = a[i];
  }
};

// O(k * N) time & O(1) space. Can see k as O(1) based on its size
var rotate = function(nums, k) {
  for (var i = 0; i < k; i++) {
    var value = nums.pop();
    nums.unshift(value);
  }
};
