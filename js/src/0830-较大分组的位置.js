/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
// 100 ms
// , 在所有 JavaScript 提交中击败了
// 76.80%
// 的用户
var largeGroupPositions = function(s) {
  const len = s.length;
  if (len < 3) {
    return [];
  }
  let start = 0;
  let startStr = s[0];
  let res = [];
  for (let i = 1; i < len; i++) {
    if (i === len - 1 && i - start >= 2 && s[i] === startStr) {
      res.push([start, len - 1]);
    }
    if (s[i] === startStr) {
      continue;
    } else {
      let end = i - 1;
      if (end - start >= 2) {
        res.push([start, end]);
      }
      start = i;
      startStr = s[i];
    }
     // console.log(i, len - 1)

  }
  return res;
};
// @lc code=end

