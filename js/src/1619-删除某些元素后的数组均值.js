/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// Your runtime beats 93.78 % of javascript submissions
const trimMean = function(arr) {
  const len1 = arr.length / 20;
  arr.sort((a, b) => a - b);
  arr.splice(0, len1);
  arr.splice(-len1, len1);
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};
// @lc code=end
export { trimMean };
