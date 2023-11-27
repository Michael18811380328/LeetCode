// 123. 买卖股票的最佳时机 III
// 动态规划，困难，没有想出正确的解答
// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 思路1：思路有问题
// 首先循环一次，获取不同的递增区间，然后把不同区间的获利放在一个数组中
// 最后查看获利数组的项数并获取最大值和第二大的值
// 如果获利数组只有1或者无，那么就返回这个数
function maxProfit1(prices) {
  const profitArray = [];
  let profit = 0;
  const len = prices.length;
  for (let i = 1; i < len; i++) {
    const next = prices[i];
    const pre = prices[i - 1];
    if (next > pre) {
      profit += (next - pre);
    } else if (next < pre) {
      if (profit > 0) {
        profitArray.push(profit);
        profit = 0;
      }
    }
    // else if (next === pre) {
    //   continue;
    // }
    if ((i === len - 1) && profit > 0) {
      profitArray.push(profit);
    }
  }
  // 下面把收益数组排序并获取最大的两个值
  const profitLen = profitArray.length;
  if (profitLen === 0) {
    return 0;
  }
  if (profitLen === 1) {
    return profitArray[0];
  }
  if (profitLen === 2) {
    return profitArray[0] + profitArray[1];
  }
  profitArray.sort((a, b) => b - a);
  return profitArray[0] + profitArray[1];
}

// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6
// console.log(maxProfit([1, 2, 3, 4, 5])); // []
// console.log(maxProfit([7, 6, 4, 3, 1])); // [6]
// console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])); // 13 这里有问题

// 思路2：官方动态规划
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/solutions/552695/mai-mai-gu-piao-de-zui-jia-shi-ji-iii-by-wrnt/
const maxProfit = function(prices) {
  const n = prices.length;
  // 设置四个变量，对应四个动态转移方程
  // buy1 只进行过一次买操作；
  // sell1 进行了一次买操作和一次卖操作，即完成了一笔交易；
  // buy2 在完成了一笔交易的前提下，进行了第二次买操作；
  // sell2 完成了全部两笔交易。
  let buy1 = -prices[0];
  let buy2 = -prices[0];
  let sell1 = 0;
  let sell2 = 0;
  for (let i = 1; i < n; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};

export { maxProfit, maxProfit1 };
