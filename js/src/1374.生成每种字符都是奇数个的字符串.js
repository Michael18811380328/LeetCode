/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// Your runtime beats 15.34 % of javascript submissions
var generateTheString = function(n) {
  let res = '';
  if (n % 2 === 0) {
    res = res.padEnd(n - 1, 'a');
    res = res + 'b';
  } else {
    res = res.padEnd(n, 'a');
  }
  return res;
};
// @lc code=end

