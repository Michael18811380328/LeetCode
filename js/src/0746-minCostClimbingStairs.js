/**
 * @param {number[]} cost
 * @return {number}
 * 最小花费爬楼梯，DP 入门的题目
 * 题目有思路，但是处理递推开始没有算对
 */
const minCostClimbingStairs = function(cost) {
  const len = cost.length;
  // 初始的值，前两项都是0，可以直接跳过
  // 求得是最后累计结果，那么需要计算 len + 1 的结果
  const result = new Array(len + 1);
  result[0] = 0;
  result[1] = 0;
  // 递推公式比较简单
  for (let i = 2; i <= len; i++) {
    result[i] = Math.min(result[i - 2] + cost[i - 2], result[i - 1] + cost[i - 1]);
  }
  return result[len];
};

export { minCostClimbingStairs };
