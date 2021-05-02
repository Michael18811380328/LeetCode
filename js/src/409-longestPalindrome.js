/*
 * @lc app=leetcode.cn id=409 lang=javascript
 * [409] 最长回文串
 */

/**
 * @param {string} s
 * @return {number}
 */
// 88 ms, 在所有 JavaScript 提交中击败了73.49%的用户
var longestPalindrome = function(s) {
  const len = s.length;
  // 长度是0或者1的情况
  if (len < 2) {
    return len;
  }
  // 获取字符出现的次数
  let dict = [];
  for (let i = 0; i < len; i++) {
    let key = s[i];
    if (!dict[key]) {
      dict[key] = 1;
    } else {
      dict[key] = dict[key] + 1;
    }
  }
  // 计算回文串长度
  let max = 0;
  let hasMiddle = false;
  for (let key in dict) {
    let times = dict[key];
    if (times % 2 === 0) {
      max += times;
    } else  {
      max += (times - 1);
      hasMiddle = true;
    }
  }
  // 如果中间有值，增加一个长度
  if (hasMiddle) max++;
  return max;
};
