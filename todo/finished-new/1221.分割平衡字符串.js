/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 84 ms, 在所有 JavaScript 提交中击败了 70.55% 
var balancedStringSplit = function(s) {
  let times = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      right++;
    } else {
      left++;
    }
    if (left === right) {
      times++;
    }
  }
  return times;
};
// @lc code=end

