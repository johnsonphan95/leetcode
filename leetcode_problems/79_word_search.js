// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

const exist = (board, word) => {
  const h = board.length;
  const w = board[0].length;

  let dfs = (board, word, i, j, k) => {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i >= h || j >= w || board[i][j] !== word[k])
      return false;
    let temp = board[i][j];
    board[i][j] = "";
    let found =
      dfs(board, word, i + 1, j, k + 1) ||
      dfs(board, word, i - 1, j, k + 1) ||
      dfs(board, word, i, j + 1, k + 1) ||
      dfs(board, word, i, j - 1, k + 1);
    board[i][j] = temp;
    return found;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
};
