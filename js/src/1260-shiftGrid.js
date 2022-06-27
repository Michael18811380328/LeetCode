/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
// 124 ms, 在所有 JavaScript 提交中击败了62.75%
const shiftGrid = function(grid, k) {
  // 如果K是0 ，那么不移动
  if (k === 0) {
    return grid;
  }
  const m = grid.length;
  const n = grid[0].length;
  // 如果K是 M * N 的倍数，那么也不移动
  if (k % (m * n) === 0) {
    return grid;
  }
  // 获取实际需要移动的次数
  const K = k % (m * n);
  // 先把二维矩阵转换成一维矩阵，获取M和N
  let arr = grid.flat();
  // 然后把一维矩阵移动 余数次数
  arr = (arr.slice(-K)).concat(arr.slice(0, arr.length - K));
  const res = new Array(m);
  // 然后把一维矩阵转换成二维矩阵输出
  for (let i = 0; i < m; i++) {
    res[i] = arr.splice(0, n);
  }
  return res;
};
// @lc code=end
