/*
 * @lc app=leetcode.cn id=1941 lang=javascript
 *
 * [1941] 检查是否所有字符出现次数相同
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 考点：遍历字符串，使用对象存储出现的次数
var areOccurrencesEqual = function(s) {
  // 1、如果长度是1，一个字符，直接返回真
  const len = s.length;
  if (len === 1) {
    return true;
  }
  // 2、创建一个对象，存储字符和出现的次数
  let dict = {};
  for (let i = 0; i < len; i++) {
    let key = s[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key] = dict[key] + 1;
  }
  // 3、遍历对象，判断出现次数是否相同。如果不同，返回false
  let times = -1;
  for (let key in dict) {
    let value = dict[key];
    if (times === -1) {
      times = value;
    } else {
      if (times !== value) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

