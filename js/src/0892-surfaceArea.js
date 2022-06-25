/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

// 72 ms Your runtime beats 85.71 %
const surfaceArea = function(grid) {
  // 表面积 = 全部的表面积 - 水平方向重叠的部分 - 垂直方向重叠的部分
  const len = grid.length;
  // 先计算全部的立方体的表面积
  let total = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      total += grid[i][j] * 6;
    }
  }
  // 计算垂直方向重叠的表面积
  let vertical = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 垂直大于两个才有重叠的面积
      if (grid[i][j] > 1) {
        vertical += ((grid[i][j] - 1) * 2);
      }
    }
  }
  // 计算水平方向重叠的面积
  let horizontal = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const curr = grid[i][j];
      // 计算四个面水平方向重叠的表面积
      if (j !== len - 1) {
        horizontal += Math.min(grid[i][j + 1], curr);
      }
      if (j !== 0) {
        horizontal += Math.min(grid[i][j - 1], curr);
      }
      if (i !== len - 1) {
        horizontal += Math.min(grid[i + 1][j], curr);
      }
      if (i !== 0) {
        horizontal += Math.min(grid[i - 1][j], curr);
      }
    }
  }
  // console.log(total, vertical, horizontal);
  return total - vertical - horizontal;
};

// unit test success
// console.log(surfaceArea([[2]]) === 10);
// console.log(surfaceArea([[1,2],[3,4]]) === 34);
// console.log(surfaceArea([[1,0],[0,2]]) === 16);
// console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]) === 32);
// console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]) === 46);

// 改进版
// 72 ms Your runtime beats 85.71 %
// 三次循环变成1次循环
const surfaceArea2 = function(grid) {
  const len = grid.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const curr = grid[i][j];
      total += curr * 6;
      if (curr > 1) {
        total -= ((curr - 1) * 2);
      }
      if (j !== len - 1) {
        total -= Math.min(grid[i][j + 1], curr);
      }
      if (j !== 0) {
        total -= Math.min(grid[i][j - 1], curr);
      }
      if (i !== len - 1) {
        total -= Math.min(grid[i + 1][j], curr);
      }
      if (i !== 0) {
        total -= Math.min(grid[i - 1][j], curr);
      }
    }
  }
  return total;
};

export { surfaceArea, surfaceArea2 };
