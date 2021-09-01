/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 34.38%

var makeGood = function(s) {
  if (s.length < 2) return s;
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    let item = s[i];
    if (stack.length === 0) {
      stack.push(item);
    }
    else if (Math.abs(item.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
      stack.pop();
    }
    else {
      stack.push(item);
    }
  }
  return stack.join('');
};
// @lc code=end

