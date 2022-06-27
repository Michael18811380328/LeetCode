/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// Your runtime beats 24.53 % of javascript submissions
const canMakeArithmeticProgression = function(arr) {
  const len = arr.length;
  if (len === 2) return true;
  arr.sort((a, b) => a - b);
  const interval = arr[1] - arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] - arr[i - 1] !== interval) {
      return false;
    }
  }
  return true;
};
// @lc code=end
