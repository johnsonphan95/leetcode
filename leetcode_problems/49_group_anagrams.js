// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

const groupAnagrams = strs => {
  const hash = {};

  for (str of strs) {
    let set = str
      .split("")
      .sort()
      .join("");
    if (hash[set]) {
      hash[set].push(str);
    } else {
      hash[set] = [str];
    }
  }
  return Object.values(hash);
};
