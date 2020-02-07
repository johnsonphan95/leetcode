// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7]
// Explanation:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Note:
// You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?

var maxSlidingWindow = function(nums, k) {
  if (!nums || !nums.length || k > nums.length) return [];
  const deque = [],
    result = [];

  let i = 0;
  while (i < nums.length) {
    if (deque.length > 0) {
      // if index at front of deque is not in the window
      if (deque[0] < i - k + 1) deque.shift();

      // if index of largest val in deque is < nums[i] then empty deque
      if (nums[deque[0]] < nums[i]) deque.length = 0;

      // remove indexes of vals less than nums[i]
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
    }
    deque.push(i);

    if (i >= k - 1) result.push(nums[deque[0]]);
    i++;
  }
  return result;
};
