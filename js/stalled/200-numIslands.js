/**
 * @param {character[][]} grid
 * @return {number}
 */
// 遍历这个二维数组；如果遇到一个节点是1，结果加1，然后设置周边的全部的节点是false。遍历时遇到false就不需要遍历了。因为数组是特殊的对象。

// 辅助函数：把一个节点周边的全部是1的节点设置成false

function viewPoint(grid, i, j) {
  grid[i][j].isViewed = true;
  // 遍历周边的若干点，如果也是1，那么设置为isViewed, 递归，直到不是1
}

const numIslands = function (grid) {
  const island = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const point = grid[i][j];
      if (!point.isViewed && point === 1) {
        isLand++;

        this.viewPoint(grid, i, j);
      }
    }
  }
}
