// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

var wordBreak = function(s, wordDict) {
  const l = s.length;
  const dp = new Array(l + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= l; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
        console.log(j, i, s.substring(j, i));
        dp[i] = true;
        break;
      }
    }
  }
  return dp[l];
};

// With Trie implementation
var wordBreak = function(s, wordDict) {
  let trie = new Trie();
  wordDict.forEach(word => trie.add(word));

  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && trie.had(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

var Trie = function() {
  this.children = {};
  this.isValue = false;
  this.add = function(str, index = 0) {
    if (index === str.length) {
      this.isValue = true;
    } else {
      let c = str[index];
      if (!(c in this.children)) {
        this.children[c] = new Trie();
      }
      this.children[c].add(str, index + 1);
    }
  };
  this.had = function(str, index = 0) {
    if (index === str.length) {
      return this.isValue;
    } else {
      let c = str[index];
      if (!(c in this.children)) {
        return false;
      }
      return this.children[c].had(str, index + 1);
    }
  };
};
