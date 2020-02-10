// Given a string, sort it in decreasing order based on the frequency of characters.

var frequencySort = function(s) {
  let map = {}; 
  let chars = s.split("");
  let result = "";
  
  for (const char of chars) {
      map[char] = (map[char] || 0) + 1;
  }
  
  Object.keys(map).sort((a, b) => map[b] - map[a]).forEach(char => {
      for (let i = map[char]; i > 0; i--) {
          result += char;
      }
  })
  return result;
};