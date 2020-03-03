// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""

var reorganizeString = function(S) {
  let hash = {};
  for (let c of S) hash[c] = hash[c] + 1 || 1;

  let sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
  let res = [];
  let index = 0;

  for (let i = 0; i< sort.length; i++) {
      let count = hash[sort[i]];
      if (count > parseInt((S.length + 1)/2)) return "";
      for (let j = 0; j < count; j++) {
          if (index >= S.length) index = 1;
          res[index] = sort[i];
          index += 2;
      }
  } 
  return res.join('');
};