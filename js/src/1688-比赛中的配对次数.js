/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 92.76 % of javascript submissions
const numberOfMatches = function(n) {
  if (n === 1) {
    return 0;
  }
  let num = 0;
  while (n > 1) {
    const times = Math.floor(n / 2);
    num += times;
    n = Math.ceil(n / 2);
  }
  return num;
};
// @lc code=end
