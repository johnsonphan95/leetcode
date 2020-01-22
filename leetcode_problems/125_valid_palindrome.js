// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

const isPalindrome = s => {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  s = s.toLowerCase();
  for (let [i, j] = [0, s.length - 1]; i < j; ) {
    if (s[i] != s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
