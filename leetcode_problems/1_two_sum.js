// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const match = (target - num);
        if (hash[match] !== undefined) {
            return [hash[match], i];
        }
        hash[num] = i;
    }
};