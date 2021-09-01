/*
 * [463] 岛屿的周长
 */
// 辅助函数，获取一个节点的边长（如果四周的节点存在，判断 0-1-undefined的情况）
function getBorder(matrix, i, j) {
  let result = 0;
  if (matrix[i]) {
    if (matrix[i][j - 1] !== 1) {
      result++;
    }
    if (matrix[i][j + 1] !== 1) {
      result++;
    }
  }
  if (!matrix[i - 1] || (matrix[i - 1] && matrix[i - 1][j] !== 1)) {
    result++;
  }
  if (!matrix[i + 1] || (matrix[i + 1] && matrix[i + 1][j] !== 1)) {
    result++;
  }
  return result;
}

// 思路：遍历矩阵:如果当前的值是1，使用辅助函数处理
/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const x = grid.length;
  const y = grid[0].length;
  let border = 0;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        border += getBorder(grid, i, j);
      }
    }
  }
  return border;
}

export { islandPerimeter };
