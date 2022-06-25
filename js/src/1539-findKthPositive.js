/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 100 ms, 在所有 JavaScript 提交中击败了43.23%
const findKthPositive = function(arr, k) {
  // 两种情况
  // 如果缺失的这个数字，在 arr 内部
  const tmp = [];
  const len = arr.length;
  let current = 1;
  for (let i = 0; i < len; i++) {
    if (arr[i] === current) {
      current++;
    } else {
      tmp.push(current);
      if (tmp.length === k) {
        return current;
      }
      current++;
      i--;
    }
  }
  // 如果确实的这个数字，在 arr 外部
  return current + k - 1 - tmp.length;
};
// @lc code=end

export { findKthPositive };
