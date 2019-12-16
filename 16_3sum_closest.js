// Given an array nums of n integers and an integer target, find three integers 
// in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each input would have exactly one solution.

var threeSumClosest = function(nums, target) {
    if (nums.length <= 3) return; 
    let answer = Infinity; 
    
    nums.sort((a, b) => a - b); 
    
    for (let i = 0; i < nums.length; i++){
        
        for (let j = i + 1, k = nums.length - 1; j < k;){
            let sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - sum) < Math.abs(target - answer)){
                answer = sum; 
            } 
            if (sum < target){
                j++
            } else if (sum > target){
                k--; 
            } else {
                return sum
            }
        }
    }
    return answer;
};