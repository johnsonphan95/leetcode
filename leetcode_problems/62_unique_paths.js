//

const uniquePaths = (m, n) => {
  const currRow = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      currRow[j] += currRow[j - 1];
    }
  }

  return currRow[n - 1];
};
