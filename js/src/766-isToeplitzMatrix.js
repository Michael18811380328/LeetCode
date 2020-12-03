/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 35.48%
var isToeplitzMatrix = function(matrix) {
  if (matrix.length === 0) return true;
  let dict = matrix[0];
  let len = dict.length;
  if (len === 0) return true;
  for (let i = 1; i < matrix.length; i++) {
    // 比较第i行和dict是否相同
    let first = matrix[i][0];
    dict.pop();
    dict.unshift(first);
    for (let j = 0; j < len; j++) {
      if (dict[j] !== matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

