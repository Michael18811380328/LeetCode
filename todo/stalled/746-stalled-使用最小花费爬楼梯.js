/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 很显然，这个通过动态规划实现
var minCostClimbingStairs = function(cost) {
  let init = 0
  return runCost(cost, init);
};

var runCost = function(cost, init) {
  // 这里递归一下
  console.log(init);
  if (!cost || cost.length === 1) {
    return init;
  }
  else if (cost.length === 2) {
    return Math.min(cost[0], cost[1]) + init;
  }
  // 这里处理长度是3或者4的情况
  else {
    // 判断最后两个数字的大小，然后依次执行
    if (cost[cost.length - 1] >= cost[cost.length - 2]) {
      cost.pop();
      init += cost.pop();
      return runCost(cost, init);
    } else {
      init += cost.pop();
      return runCost(cost, init);
    }
  }
}
// [100, 11, 1, 1, 100, 1, 1]
// 现在还是用贪心的思路，不是动态规划的思路！！！
// 动态规划的思路：如果一个思路比另一个思路好，那么使用这个思路
// @lc code=end

