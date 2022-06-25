/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 14.29%
const average = function(salary) {
  salary.sort((a, b) => a - b);
  let sum = 0;
  const fn = function(num, total) {
    return num + total;
  };
  sum = salary.reduce(fn, sum);
  sum = sum - salary[0] - salary[salary.length - 1];
  return sum / (salary.length - 2);
};
// @lc code=end

export { average };
