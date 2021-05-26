/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//  96 ms, 在所有 JavaScript 提交中击败了18.81% 
// 这个时间还不如之前的版本
var truncateSentence = function(s, k) {
  let K = k;
  let position = 0;
  while (K > 0) {
   let index = s.indexOf(' ', position);
    if (index > 0) {
      position = index + 1;
      K--;
    }
    if (index < 0) {
      return s;
    }
  }
  return s.slice(0, position - 1);
};

// @lc code=end

