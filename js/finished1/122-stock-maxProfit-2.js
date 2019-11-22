// 122. 买卖股票的最佳时机 II

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 72 ms, 在所有 javascript 提交中击败了 75.23%
function maxProfit(prices) {
  const len = prices.length;
  if (len === 0) return 0;
  let profit = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += (prices[i] - prices[i - 1]);
    }
  }
  return profit;
}

export { maxProfit };
