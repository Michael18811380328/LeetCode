/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 80 ms, 在所有 JavaScript 提交中击败了84.21%
const maxLengthBetweenEqualCharacters = function(s) {
  let max = -1;
  const dict = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const key = s[i];
    if (!dict[key] && dict[key] !== 0) {
      dict[key] = i;
    } else {
      const distance = i - dict[key] - 1;
      max = max > distance ? max : distance;
    }
  }
  return max;
};
// @lc code=end
export { maxLengthBetweenEqualCharacters };
