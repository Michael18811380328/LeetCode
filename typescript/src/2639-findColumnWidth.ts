/**
 * @param {number[][]} grid
 * @return {number[]}
 * 简单，遍历矩阵找到最大值
 */
function findColumnWidth(grid: number[][]): number[] {
  const rowLen = grid.length;
  const columnLen = grid[0].length;
  const result: number[] = [];
  for (let i = 0; i < columnLen; i++) {
    let tmp = 0;
    for (let j = 0; j < rowLen; j++) {
      const curr = String(grid[j][i]).length;
      if (curr > tmp) {
        tmp = curr;
      }
    }
    result.push(tmp);
  }
  return result;
}

export {findColumnWidth};
