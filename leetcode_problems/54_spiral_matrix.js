// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(matrix) {
  const result = [];
  if (!matrix.length) return result;
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      result.push(matrix[rowStart][col]);
    }
    rowStart++;
    for (let row = rowStart; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    colEnd--;
    for (let col = colEnd; col >= colStart; col--) {
      result.push(matrix[rowEnd][col]);
    }
    rowEnd--;
    for (let row = rowEnd; row >= rowStart; row--) {
      result.push(matrix[row][colStart]);
    }
    colStart++;
  }
  const total = matrix.length * matrix[0].length;
  while (result.length > total) result.pop();
  return result;
};
