/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 68.24%
// 的用户
var findOcurrences = function(text, first, second) {
  let arr = text.split(' ');
  let res = [];
  const len = arr.length;
  if (len < 3) {
    return res;
  }
  for (let i = 1; i < len - 1; i++) {
    if (
      arr[i] === second &&
      arr[i - 1] === first
    ) {
      res.push(arr[i + 1]);
    }
  }
  return res;
};
// @lc code=end

