/*
 * @lc app=leetcode.cn id=2119 lang=javascript
 *
 * [2119] 反转两次的数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 0 满足
// 10的倍数不满足
// 其他都满足
// Your runtime beats 77.99 % of javascript submissions
var isSameAfterReversals = function(num) {
  if (num === 0) {
    return true;
  }
  if (num % 10 === 0) {
    return false;
  }
  return true;
};
// @lc code=end

