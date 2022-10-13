function checkXMatrix(grid: number[][]): boolean {
  const len: number = grid.length;
  // 辅助函数：判断是否在对角
  function check(a: number, b: number): boolean {
    if (a === b) {
      return true;
    }
    if (a + b === len - 1) {
      return true;
    }
    return false;
  }
  // 循环矩阵
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

// console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]) === true);
// console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]) === false);

export {checkXMatrix};
