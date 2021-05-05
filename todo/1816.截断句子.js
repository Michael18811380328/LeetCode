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
// 思路一：遍历字符串
// 96 ms, 在所有 JavaScript 提交中击败了16.61%
var truncateSentence = function(s, k) {
  const len = s.length;
  let remain = k;
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      remain--;
    }
    if (remain <= 0) {
      return s.slice(0, i);
    }
  }
  return s;
};

// 思路2：转换成数组
// 88 ms, 在所有 JavaScript 提交中击败了40.79%
var truncateSentence2 = function(s, k) {
  let sList = s.split(' ');
  return sList.slice(0, k).join(' ');
};

// @lc code=end

