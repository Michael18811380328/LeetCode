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
// Your runtime beats 5.05 % of javascript submissions
const searchMatrix = function(matrix, target) {
  const rowLen = matrix.length;
  const columnLen = matrix[0].length;
  // 如果目标值不在最大最小值范围内，不存在这个数字
  if (matrix[0][0] > target || matrix[rowLen - 1][columnLen - 1] < target) {
    return false;
  }
  // 先使用分治算法，缩小矩阵的范围(先缩小行的范围)
  let startRowIdx;
  let endRowIdx;
  for (let i = 0; i < rowLen; i++) {
    const row = matrix[i];
    if (row[0] === target || row[columnLen - 1] === target) return true;
    if (row[columnLen] < target) {
      continue;
    } else if (row[0] < target && row[columnLen - 1] > target && !startRowIdx && startRowIdx !== 0) {
      startRowIdx = i;
    } else if (row[0] > target && !endRowIdx && endRowIdx !== 0) {
      endRowIdx = i - 1;
    }
  }
  endRowIdx = !endRowIdx ? columnLen - 1 : endRowIdx;
  // 列需要优化
  for (let i = startRowIdx; i <= endRowIdx; i++) {
    const arr = matrix[i];
    if (getNumber(arr, target)) return true;
  }
  return false;
};

const getNumber = (arr, target) => {
  if (!arr) return false;
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  if (arr[start] > target || arr[end] < target) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  while (start < end - 1) {
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      end = mid;
    } else if (arr[mid] < target) {
      start = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return false;
};

// @lc code=end
