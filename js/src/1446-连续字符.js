/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 47.02%
// 的用户
var maxPower = function(s) {
  if (s.length === 1) return 1;
  let max = 1;
  let times = 1;
  let current = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === current) {
      times++;
      max = max > times ? max : times;
    } else {
      times = 1;
      current = s[i];
    }
  }
  return max;
};
// @lc code=end

