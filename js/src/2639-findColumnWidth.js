/**
 * @param {number[][]} grid
 * @return {number[]}
 * 简单，遍历矩阵找到最大值
 */
// 60 ms, 在所有 JavaScript 提交中击败了92.22%
const findColumnWidth = function(grid) {
  const rowLen = grid.length;
  const columnLen = grid[0].length;
  const result = [];
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
};

// console.log(findColumnWidth([[1], [22], [333]])); // [3]
// console.log(findColumnWidth([[-15, 1, 3], [15, 7, 12], [5, 6, -2]])); // [3,1,2]

export { findColumnWidth };
