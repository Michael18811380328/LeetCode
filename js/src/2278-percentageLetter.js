/*
 * @lc app=leetcode.cn id=2278 lang=javascript
 *
 * [2278] 字母在字符串中的百分比
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 * Your runtime beats 67.99 % of javascript submissions
 */
const percentageLetter = function(s, letter) {
  const len = s.length;
  let times = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === letter) {
      times++;
    }
  }
  return Math.floor(times / len * 100);
};
// @lc code=end
export { percentageLetter };
