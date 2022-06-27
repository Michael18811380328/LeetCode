/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 33.52%
// 的用户
const finalPrices = function(prices) {
  // 先把价格复制一份，然后升序排列
  const ARR = prices.slice(0).sort((a, b) => a - b);
  // 遍历原始价格
  const res = [];
  for (let i = 0; i < prices.length; i++) {
    // 如果没有找到比当前值小的值，那么就去掉字典中的值
    if (prices[i] === ARR[0]) {
      // 如果最小的值有多个，那么也算数
      if (prices[i] === ARR[1]) {
        res[i] = 0;
      } else {
        res[i] = prices[i];
      }
      ARR.shift();
    }
    // 如果有比这个价格小的值，那么就向后遍历
    // 然后找到当前较小的值，然后把这个值从升序排序中删除
    else {
      let j = i + 1;
      while (j < prices.length) {
        if (prices[j] <= prices[i]) {
          res[i] = prices[i] - prices[j];
          const index = ARR.indexOf(prices[i]);
          ARR.splice(index, 1);
          j = prices.length;
        }
        j++;
      }
    }
  }
  return res;
};
// @lc code=end

export { finalPrices };
