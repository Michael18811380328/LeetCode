/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// Your runtime beats 100 % of javascript submissions
const halvesAreAlike = function(s) {
  s = s.toLowerCase();
  const len = s.length;
  const check = function(s) {
    return (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u');
  };
  let left = 0;
  let right = 0;
  for (let i = 0; i < len; i++) {
    if (check(s[i])) {
      (i >= len / 2) ? left++ : right++;
      if (left > right) {
        return false;
      }
    }
  }
  return left === right;
};
// @lc code=end

export { halvesAreAlike };
