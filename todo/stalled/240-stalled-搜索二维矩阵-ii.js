/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rowLen = matrix.length;
  const columnLen = matrix[0].length;
  // 如果目标值不在最大最小值范围内，不存在这个数字
  if (matrix[0][0] > target ||  matrix[rowLen - 1][columnLen - 1] < target) {
    return false;
  }
  // 先使用分治算法，缩小矩阵的范围
  // let startRowIdx;
  // let endRowIdx;
  // for (let i = 0; i < matrix.length; i++) {
  //   let row = matrix[i];
  //   if (!startRowIdx && row[0] > target && row[row.length - 1] < target) {
  //     startRowIdx = i;
  //     continue;
  //   }
  //   if () {

  //   }
  // }

  // 然后使用二分法判断是否出现这个元素
};
// @lc code=end

