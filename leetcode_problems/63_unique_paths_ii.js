// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

var uniquePathsWithObstacles = function(obstacleGrid) {
  let r = obstacleGrid.length; 
  let c = obstacleGrid[0].length; 
  
  if (obstacleGrid[0][0] === 1) return 0;
  
  obstacleGrid[0][0] = 1;
  
  // filling in first column
  for (let i = 1; i < r; i++) {
      obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) 
          ? 1 : 0;
  }
  //     filling in first row
  for (let i = 1; i < c; i++) {
      obstacleGrid[0][i] = (obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1) 
          ? 1 : 0;
  }
  
  for (let i = 1; i < r; i++) {
      for (let j = 1; j < c; j++) {
          if (obstacleGrid[i][j] === 0) {
              obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
          } else {
              obstacleGrid[i][j] = 0;
          }
      }
  }
  
  return obstacleGrid[r - 1][c - 1]