function checkXMatrix(grid: number[][]): boolean {
  const len: number = grid.length;
  function check(a: number, b: number): boolean {
    if (a === b) {
      return true;
    }
    if (a + b === len - 1) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const item = grid[i][j];
      if (check(i, j)) {
        if (item === 0) {
          return false;
        }
      } else {
        if (item !== 0) {
          return false;
        }
      }
    }
  }
  return true;
}

export {checkXMatrix};
