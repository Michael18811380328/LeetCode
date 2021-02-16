/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// Your runtime beats 71.27 % of javascript submissions
var maxDepth = function(s) {
  if (s.includes('(') === false) {
    return 0;
  }
  let len = 0;
  let max = 0;
  const sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    if (s[i] === '(') {
      len++;
      if (max < len) {
        max = len;
      }
    }
    else if (s[i] === ')') {
      len--;
    }
  }
  return max;
};
// @lc code=end

