// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

//O(N^2) time O(N)space
var threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    
    let res = []; 
    if (nums.length < 3) return res;
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for(let j = i + 1, k = nums.length - 1; j < k;) {
            let currSum = nums[i] + nums[j] + nums[k];
            if (currSum == 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++; 
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++; 
                while (j < k && nums[k] == nums[k + 1]) k--;
            }
            else if (currSum > 0) k--; 
            else j++;
        }
    }
    return res;
}