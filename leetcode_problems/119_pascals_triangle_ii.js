// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

var getRow = function(rowIndex) {
  let result = [];
  for (let i = 0; i <= rowIndex; i++) {
    let cur = [];
    cur[0] = 1;
    cur[i] = 1;
    console.log(cur);
    for (let j = 1; j < i; j++) {
      cur[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(cur);
  }
  return result[rowIndex];
};
