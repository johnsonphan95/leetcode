// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

var partitionLabels = function(S) {
  if (!S || !S.length) return [];
  let dict = new Array(26);

  for (let i = 0; i < S.length; i++) {
    dict[S[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
  }

  let res = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, dict[S[i].charCodeAt(0) - "a".charCodeAt(0)]);
    if (i === end) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }
  return res;
};
