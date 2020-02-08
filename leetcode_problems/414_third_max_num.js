// Given a non-empty array of integers, return the third maximum number in this array.
// If it does not exist, return the maximum number. The time complexity must be in O(n).

var thirdMax = function(nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val > first) {
      val = first;
      first = nums[i];
    }
    if (val > second && val !== first) {
      let temp = val;
      val = second;
      second = temp;
    }
    if (val > third && val !== first && val !== second) {
      third = val;
    }
  }

  if (third !== -Infinity) return third;
  return first;
};
