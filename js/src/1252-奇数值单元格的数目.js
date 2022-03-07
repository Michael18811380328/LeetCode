/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// 84 ms, 在所有 JavaScript 提交中击败了82.67%的用户
const oddCells = function(n, m, indices) {
  const arr1 = new Array(n).fill(false);
  const arr2 = new Array(m).fill(false);
  const len = indices.length;
  for (let i = 0; i < len; i++) {
    const item = indices[i];
    arr1[item[0]] = !arr1[item[0]];
    arr2[item[1]] = !arr2[item[1]];
  }
  let len1 = 0;
  let len2 = 0;
  arr1.forEach((item) => {
    if (item === true) len1++;
  });
  arr2.forEach((item) => {
    if (item === true) len2++;
  });
  return len1 * m + len2 * n - len1 * len2 * 2;
};
// @lc code=end
