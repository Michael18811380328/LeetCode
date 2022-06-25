/*
 * @lc app=leetcode.cn id=2220 lang=javascript
 *
 * [2220] 转换数字的最少位翻转次数
 */

// @lc code=start
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 * Your runtime beats 75.61 % of javascript submissions
 */
const minBitFlips = function(start, goal) {
  if (start === goal) {
    return 0;
  }
  let a = start.toString(2);
  let b = goal.toString(2);
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, '0');
  b = b.padStart(maxLen, '0');
  let res = 0;
  for (let i = 0; i < maxLen; i++) {
    if (a[i] !== b[i]) {
      res++;
    }
  }
  return res;
};
// @lc code=end

export { minBitFlips };
