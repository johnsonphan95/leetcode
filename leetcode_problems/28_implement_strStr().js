// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack, needle) {
    let start = 0; 
    for (i = needle.length - 1; i < haystack.length; i++){
        if (haystack.substring(start, i + 1) === needle ) return start
        start++;
    }
    return -1
};