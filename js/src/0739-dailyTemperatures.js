/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 第一种思路：双层循环，按照常理思考的方法
// 现在性能很差
// Your runtime beats 5.03 % of javascript submissions
const dailyTemperatures = function(temperatures) {
  const len = temperatures.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    const curr = temperatures[i];
    for (let j = 1; j <= len - i; j++) {
      if (temperatures[j + i] > curr) {
        res[i] = j;
        break;
      } else if (j === len - i) {
        res[i] = 0;
      }
    }
  }
  res[len - 1] = 0;
  return res;
};
// @lc code=end
