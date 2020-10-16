// 123. 买卖股票的最佳时机 III

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入: [3,3,5,0,0,3,1,4]
// 输出: 6
// 解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。


// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这个情况下, 没有交易完成, 所以最大利润为 0。

// 思路：首先循环一次，获取不同的递增区间，然后把不同区间的获利放在一个数组中
// 最后查看获利数组的项数并获取最大值和第二大的值
// 如果获利数组只有1或者无，那么就返回这个数

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
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
  // console.log(profitArray);
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

export { maxProfit };
