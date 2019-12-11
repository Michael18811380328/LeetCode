// 200
// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。
// 一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
// 考点：哈希表

// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
// 结果1

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 思路一：136 ms, 在所有 javascript 提交中击败了9.33%
// 遍历这个二维数组；如果遇到一个节点是1，结果加1，然后设置周边的全部的节点是false。遍历时遇到false就不需要遍历了。因为数组是特殊的对象。
// 辅助函数：把一个节点周边的全部是1的节点设置成false

function getKey(i, j) {
  return `${i}+${j}`;
}

function viewPoint(i, j, grid) {
  // 设置当前节点的属性是true
  const key = getKey(i, j);
  grid[key] = true;

  // 遍历周边四个节点，如果有节点，节点没有被遍历过，并且值为1，那么继续遍历这个节点和其子节点
  if (grid[i][j - 1] && grid[i][j - 1] === '1') {
    const key = getKey(i, j - 1);
    if (!grid[key]) {
      viewPoint(i, j - 1, grid);
    }
  }
  if (grid[i][j + 1] && grid[i][j + 1] === '1') {
    const key = getKey(i, j + 1);
    if (!grid[key]) {
      viewPoint(i, j + 1, grid);
    }
  }
  if (grid[i - 1] && grid[i - 1][j] === '1') {
    const key = getKey(i - 1, j);
    if (!grid[key]) {
      viewPoint(i - 1, j, grid);
    }
  }
  if (grid[i + 1] && grid[i + 1][j] === '1') {
    const key = getKey(i + 1, j);
    if (!grid[key]) {
      viewPoint(i + 1, j, grid);
    }
  }
}

function numIslands(grid) {
  let island = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const key = getKey(i, j);
      if (!grid[key] && grid[i][j] === '1') {
        island++;
        viewPoint(i, j, grid);
      }
    }
  }
  return island;
}

export { numIslands };
