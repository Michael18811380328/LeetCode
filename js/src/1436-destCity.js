/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 93.11%
// 的用户
const destCity = function(paths) {
  const dict = {};
  const len = paths.length;
  if (len === 1) {
    return paths[0][1];
  }
  for (let i = 0; i < len; i++) {
    const key = paths[i][0];
    dict[key] = true;
  }
  for (let i = 0; i < len; i++) {
    const key = paths[i][1];
    if (!dict[key]) {
      return key;
    }
  }
};
// @lc code=end
