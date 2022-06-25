/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 85.29%
// 的用户
const numberOfLines = function(widths, s) {
  let remain = 100;
  let line = 1;
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - 97;
    const len = widths[index];
    if (remain >= len) {
      remain = remain - len;
    } else {
      line++;
      remain = 100;
      remain = remain - len;
    }
  }
  const res1 = line;
  const res2 = 100 - remain;
  return [res1, res2];
};
// @lc code=end

export { numberOfLines };
