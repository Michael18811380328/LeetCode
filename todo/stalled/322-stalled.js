/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 注意：硬币找零贪心算法可能不是最优解
var coinChange = function(coins, amount) {
  if (amount === 0) return 0;
  coins.sort((a, b) => a - b);
  // 可以把大部分情况过滤掉
  // 首先使用贪心算法计算出当前最合理的解
  let min = heart(coins, amount);
  // 然后依次去掉最大值，判断其他情况是否有更合理的解
  // 如果当前的选项已经比最佳的解法差，那么直接pass
  // 这个保证正确
  coins.pop();
  while (coins.length > 0) {
    let res = heart(coins, amount, min);
    if (res) {
      min = res;
    }
    coins.pop();
  }
  return min;
};

// 使用贪心算法计算出最合理的解
var heart = function(coins, amount, times) {
  let time = 0;
  let remain = amount;
  for (let i = coins.length - 1; i > -1; i--) {
    let current = coins[i];
    remain = amount % current;
    time = time + (amount - remain) / current;
    amount = remain;
    if (times && times < time) {
      return false;
    }
    if (remain === 0) {
      break;
    }
  }
  return remain === 0 ? time : -1;
}

// [186,419,83,408]
// 6249
// 20
// 这个情况不能使用逐层贪心算法解决（需要使用动态规划解决）

// @lc code=end