/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 85.37%
// 这样可以实现，但是性能不太好
const diagonalSum = function(mat) {
  const len = mat.length;
  if (len === 1) return mat[0][0];
  // 主对角线：i === j 获取 && i + j !== mat
  // 副对角线：i + j === len
  let sum = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j || i + j === len - 1) {
        sum += mat[i][j];
      }
    }
  }
  return sum;
};
// @lc code=end
