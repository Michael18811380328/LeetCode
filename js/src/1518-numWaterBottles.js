/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 * [1518] 换酒问题
 */
// 84 ms
// , 在所有 JavaScript 提交中击败了
// 57.06%
//
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
  // 如果瓶子小于换取的数量，直接返回瓶子数 [2, 3]
  if (numBottles < numExchange) {
    return numBottles;
  }
  return getNumber(numBottles, numExchange, 0);
};

const getNumber = function(bottles, exchanges, last) {
  // 第一种情况：喝完当前的酒，不能继续兑换，直接返回当前的数量
  if ((bottles + last) < exchanges) {
    return bottles;
  }
  // 第二种情况：喝完当前的酒，用现在的酒瓶加上以前的酒瓶，然后可以继续换酒的情况
  else if ((bottles + last) >= exchanges) {
    const newBottles = Math.floor((bottles + last) / exchanges);
    const newLast = (bottles + last) % exchanges;
    return bottles + getNumber(newBottles, exchanges, newLast);
  }
};

export { numWaterBottles };
