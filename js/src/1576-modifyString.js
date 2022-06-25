/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 31.03%

const modifyString = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      let item = 'a';
      if (s[i - 1] && s[i - 1] === item) {
        item = 'b';
      }
      if (s[i + 1] && s[i + 1] === item) {
        item = 'c';
      }
      if (s[i - 1] && s[i - 1] === item) {
        item = 'd';
      }
      s = s.slice(0, i) + item + s.slice(i + 1);
    }
  }
  return s;
};
// @lc code=end

export { modifyString };
