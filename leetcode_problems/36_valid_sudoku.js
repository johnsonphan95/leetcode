// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

var isValidSudoku = function(board) {
  let isValid = true;
  
  var isValidColumn = function(x, y) {
      let seen = {}; 
      for (let i = x; i < board.length; i++) {
          if (board[i][y] === '.') continue;
          if (seen[board[i][y]]) {
              isValid = false;
              return;
          } 
          seen[board[i][y]] = true;
      }
  }
  
  var isValidRow = function(x, y) {
      let seen = {}; 
      for (let i = y; i < board[0].length; i++) {
          if (board[x][i] === '.') continue;
          if (seen[board[x][i]]) {
              isValid = false;
              return;
          } 
          seen[board[x][i]] = true;
      }
  }
  
  var isValidSquare = function(x, y) {
      let seen = {};
      for (let i = x; i < x + 3; i++) {
          for (let j = y; j < y + 3; j++) {
              if (board[i][j] === '.') continue;
              if (seen[board[i][j]]) {
                  isValid = false;
                  return;
              }
              seen[board[i][j]] = true;
          }
      }
  }
  
  for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[0].length; j++) {
          if (!isValid) return false;
          if (i === 0) {
              isValidColumn(i, j)
          }
          if (j === 0) {
              isValidRow(i, j)
          }
          if (i % 3 === 0 && j % 3 === 0) {
              isValidSquare(i, j)
          }
      }
  }
  
  return isValid;
};