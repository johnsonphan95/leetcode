// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

var fourSum = function(nums, target) {
  let res = []; 
  let len = nums.length; 
  
  if (len < 4) return res;
  
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; 
      
      let target2 = target - nums[i];
      
      for (let j = i + 1; j < len; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue; 
          
          let target3 = target2 - nums[j];
          
          let front = j + 1; 
          let end = nums.length - 1; 
          
          while (front < end) {
              let sum = nums[front] + nums[end];
              if (sum === target3) {
                  res.push([nums[i], nums[j], nums[front], nums[end]]);
                  front++;
                  end--;
                  
                  while (front < end && nums[front] === nums[front - 1]) front++;
                  while (front < end && nums[end] === nums[end + 1]) end--;
              } 
              else if (sum < target3) {
                  front++;
              } 
              else {
                  end--;
              }
          }
      }
  }
  return res; 
};