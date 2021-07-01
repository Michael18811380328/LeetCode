/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 这是最基础的办法
// 140 ms
// , 在所有 JavaScript 提交中击败了
// 34.39%
// 的用户
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

// 方法2：遍历一次字符串，把重复的记录一下
// 116 ms
// , 在所有 JavaScript 提交中击败了
// 81.43%
// 的用户
var firstUniqChar = function(s) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (!dict[key] && dict[key] !== 0) {
      dict[key] = i;
    } else {
      dict[key] = -1;
    }
  }
  let index;
  for (let key in dict) {
    if (dict[key] > -1) {
      index = dict[key] > index ? index : dict[key];
    }
  }
  return index > -1 ? index : -1;
};

// @lc code=end

