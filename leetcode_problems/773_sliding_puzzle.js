// On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

// A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

// Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

// Examples:

// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.

var slidingPuzzle = function(board) {
  var dfs = function(curr, dx, dy) {
      for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[0].length; j++) {
              if (curr[i][j] === 0) {
                  let x = i + dx; 
                  let y = j + dy; 
                  if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return null;
                  let state = [curr[0].slice(), curr[1].slice()];
                  state[i][j] = state[x][y];
                  state[x][y] = 0;
                  return state;
              }
          }
      }
  }
  
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let visited = new Set();
  let queue = [board];
  let count = 0; 
  
  while (queue.length > 0) {
      let len = queue.length; 
      let next = []; 
      for (let i = 0; i < len; i++) {
          let curr = queue.pop(); 
          if (curr.toString() === '1,2,3,4,5,0') return count; 
          for (const dir of dirs) {
              let dx = dir[0]; 
              let dy = dir[1];
              let nextState = dfs(curr, dx, dy);
              if (!nextState) continue;
              let key = nextState.toString();
              if (!visited.has(key)) {
                  visited.add(key);
                  next.push(nextState);
              }
          }
      }
      count++;
      queue = next; 
  }
  return -1; 
};