/*
 * @lc app=leetcode.cn id=1328 lang=javascript
 *
 * [1328] 破坏回文串
 */

// 破坏回文串：思路
// 1、如果一个字母，不管怎么样都是回文，返回空字符串
// 2、如果是普通字符串，那么从前向后遍历，把当前的字符串进行替换
// 如果字符串是非a，那么替换成a  bccb accb
// 如果字符串是a, 那么继续遍历后面的字符串 aabaa aaaaa
// 如果字符串全部是a, 那么直接把最后一个变成B aaaa aaab
// 如果回文字符串的长度是奇数，那么中间一个不处理
// 看是否还有其他特殊情况？

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
//  "aba"
// Your runtime beats 38.1 % of javascript submissions
const breakPalindrome = function(palindrome) {
  const len = palindrome.length;
  if (len <= 1) {
    return '';
  }
  if (palindrome.indexOf('a') === -1) {
    return `a${palindrome.slice(1)}`;
  }
  for (let i = 0; i < len; i++) {
    if (len % 2 === 1 && i === (len - 1) / 2) {
      continue;
    }
    if (palindrome[i] !== 'a') {
      return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  }
  return `${palindrome.slice(0, len - 1)}b`;
};
// @lc code=end

export { breakPalindrome };
