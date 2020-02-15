// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0

var imageSmoother = function(M) {
  const ans = Array(M.length).fill(null).map(() => Array(M[0].length));
  const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, 1], [0, -1], [1, 0], [-1, 0], [0, 0]];
  for (let i = 0; i < M.length; i++) {
      for (let j = 0; j < M[0].length; j++) {
          let count = 0;
          let sum = 0; 
          for (const [dx, dy] of dirs) {
              let newX = i + dx; 
              let newY = j + dy; 
              if (newX >= 0 && newX < M.length && newY >= 0 && newY < M[0].length) {
                  count++;
                  sum += M[newX][newY];
              }
          }
          ans[i][j] = Math.floor(sum / count);
      }
  }
  return ans;
};