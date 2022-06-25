/*
 * @lc app=leetcode.cn id=2144 lang=javascript
 *
 * [2144] 打折购买糖果的最小开销
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 * 思路：排序，然后去掉3的倍数的项，求和即可
 * Your runtime beats 23.03 % of javascript submissions
 */
const minimumCost = function(cost) {
  let sum = 0;
  const len = cost.length;
  cost = cost.sort((a, b) => a > b ? -1 : 1);
  for (let i = 0; i < len; i++) {
    if ((i + 1) % 3 !== 0) {
      sum += cost[i];
    }
  }
  return sum;
};
// @lc code=end

export { minimumCost };
