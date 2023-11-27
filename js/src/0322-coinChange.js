/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * [322] 零钱兑换 动态规划，自己没有想出来
 */

// 思路1：贪心算法，硬币找零贪心算法可能不是最优解，有些情况不对
const coinChange = function(coins, amount) {
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
    const res = heart(coins, amount, min);
    if (res) {
      min = res;
    }
    coins.pop();
  }
  return min;
};
// 使用贪心算法计算出最合理的解
const heart = function(coins, amount, times) {
  let time = 0;
  let remain = amount;
  for (let i = coins.length - 1; i > -1; i--) {
    const current = coins[i];
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
};

// 思路2 动态规划
// 参考链接：https://leetcode.cn/problems/coin-change/solutions/975451/dai-ma-sui-xiang-lu-dai-ni-xue-tou-wan-q-80r7/
const coinChange2 = function(coins, amount) {
  if (!amount) {
    return 0;
  }
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

export { coinChange, coinChange2 };
