/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 108 ms
// , 在所有 JavaScript 提交中击败了
// 35.37%
// 的用户
var reformat = function(s) {
  if (s.length < 2) {
    return s;
  }
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (isNaN(Number(item))) {
      arr1.push(item);
    } else {
      arr2.push(item);
    }
  }
  if (Math.abs(arr1.length - arr2.length) > 1) return '';
  let len = Math.max(arr1.length, arr2.length);
  let res = '';
  for (let i = 0; i < len; i++) {
    if (len === arr1.length) {
      res = res + (arr1[i] || '') + (arr2[i] || '');
    } else {
      res = res + (arr2[i] || '') + (arr1[i] || '');
    }
  }
  return res;
};
// @lc code=end

