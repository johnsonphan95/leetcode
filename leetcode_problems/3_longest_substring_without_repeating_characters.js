// Given a string, find the length of the longest substring without repeating characters.

// O(N) time O(N) space
var lengthOfLongestSubstring = function(s) {
    let max = 0; 
    let start = 0; 
    let seen = {};
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (seen[char] >= start) {
            start = seen[char] + 1;
        }
        max = Math.max(max, i - start + 1);
        seen[char] = i;
    }
    return max;
};