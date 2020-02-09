// Given a string, sort it in decreasing order based on the frequency of characters.

var frequencySort = function(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  const result = [];

  for (let key of map.keys()) {
    result.push([key, map.get(key)]);
  }

  result.sort((a, b) => b[1] - a[1]);

  let resultStr = "";

  for (let i = 0; i < result.length; i++) {
    let j = 0;

    while (j < result[i][1]) {
      resultStr += result[i][0];
      j++;
    }
  }

  return resultStr;
};
