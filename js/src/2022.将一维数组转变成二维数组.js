/*
 * @lc app=leetcode.cn id=2022 lang=javascript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
// 简单，考点是数组的循环和剪切等
// 时间复杂度是O(n) 数组的长度 / n
// Your runtime beats 96.11 % of javascript submissions
const construct2DArray = function(original, m, n) {
  const len = original.length;
  // 如果长度不一样，无法直接转换
  if (len !== m * n) {
    return [];
  }
  // m === n === 1
  if (len === 1) {
    return [[original[0]]];
  }
  // 处理二维数组
  const res = [];
  for (let i = 0; i < len; i += n) {
    const tmp = original.slice(i, i + n);
    res.push(tmp);
  }
  return res;
};
// @lc code=end
