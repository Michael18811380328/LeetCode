/*
 * @lc app=leetcode.cn id=2108 lang=javascript
 *
 * [2108] 找出数组中的第一个回文字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
// 写一个判断回文字符串的辅助函数,遍历数组即可
const firstPalindrome = function(words) {
  // Your runtime beats 24.02 % of javascript submissions
  // let checkStr = (str) => {
  //   return str.split('').reverse().join('') === str;
  // }
  // 优化：判断回文字符串的函数
  // 优化后：Your runtime beats 50.56 % of
  const checkStr = (str) => {
    const len = str.length;
    const halflen = Math.ceil(str.length / 2);
    for (let i = 0; i < halflen; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < words.length; i++) {
    if (checkStr(words[i])) {
      return words[i];
    }
  }
  return '';
};
// @lc code=end
