// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.

// ex: 
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = (s) => {
    let longest = [0, 1];
    for(let i = 0; i < s.length; i++) {
        const check = getPalindrome(s, i, i);
        const plus = getPalindrome(s, i, i + 1);
        const currLongest = check[1] - check[0] > plus[1] - plus[0] ? check : plus; 
        longest = longest[1] - longest[0] > currLongest[1] - currLongest[0] ? longest : currLongest;
    }
    return s.substring(longest[0], longest[1]);
}

var getPalindrome = (s, left, right) => {
    while(left >= 0 && right < s.length) {
        if(s[left] != s[right]) break;
        left--; 
        right++
    }
    return [left + 1, right];
}