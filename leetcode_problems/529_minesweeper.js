const updateBoard = (board, click) => {
  const [x, y] = click;

  if (board[x][y] === 'M') {
    board[x][y] = 'X';
  } else {
    dfs(board, x, y);
  }

  return board;
};

const dfs = (board, x, y) => {
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  const m = board.length;
  const n = board[0].length;

  // Count the adjacent mines
  let minesCount = 0;
  for (let [dx, dy] of dirs) {
    const newX = x + dx, newY = y + dy;

    if (newX >= 0 && newX < m && newY >= 0 && newY < n && board[newX][newY] === 'M') {
      minesCount++;
    }
  }

  if (minesCount > 0) {
    board[x][y] = '' + minesCount;
  } else {
    board[x][y] = 'B';

    for (let [dx, dy] of dirs) {
      const i = x + dx, j = y + dy;

      if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'E') {
        board[i][j] = 'B';
        dfs(board, i, j);
      }
    }
  }
};