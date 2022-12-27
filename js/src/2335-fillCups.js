/*
 * @lc app=leetcode.cn id=2335 lang=javascript
 * [2335] 装满杯子需要的最短总时长
 */
/**
 * @param {number[]} amount
 * @return {number}
 * 先用最直接的方法实现，每次把前两个最大的减去，然后递归调用函数即可
 * 最大值100，也就是递归的次数在200之内，这个性能可以接受
 * 这个办法每次递归否需要排序，性能不好
 * Your runtime beats 58.65 % of javascript submissions
 */
const fillCups = function(amount) {
  // 辅助函数，计算三个数的情况
  function fillThreeCups(amount) {
    // 如果有一个是0，那么直接返回剩余三个的最大值即可
    if (amount[0] === 0 || amount[1] === 0 || amount[2] === 0) {
      return Math.max(...amount);
    }
    // 如果三个都不是0，那么前两个最大的减去1，剩余一个不变
    amount.sort((a, b) => {
      return a < b ? 1 : -1;
    });
    return 1 + fillThreeCups([amount[0] - 1, amount[1] - 1, amount[2]]);
  }
  return fillThreeCups(amount);
};

// 这个处理数较多的情况
const fillCups2 = function(amount) {
  // 处理特殊值
  if (amount[0] == 0 || amount[1] === 0 || amount[2] === 0) {
    return Math.max(...amount);
  }
  // 排序处理
  amount.sort((a, b) => {
    return a < b ? 1 : -1;
  });
  // 如果最大值比后面两个的和都大，直接返回最大值
  if (amount[0] > amount[1] + amount[2]) {
    return amount[0];
  }
  // 然后再辅助函数处理
  // 辅助函数，计算三个数的情况
  function fillThreeCups(amount) {
    // 如果有一个是0，那么直接返回剩余三个的最大值即可
    if (amount[0] == 0 || amount[1] === 0 || amount[2] === 0) {
      return Math.max(...amount);
    }
    // 如果三个都不是0，那么前两个最大的减去1，剩余一个不变
    amount.sort((a, b) => {
      return a < b ? 1 : -1;
    });
    const indent = Math.max(amount[1] - amount[2], 1);
    return indent + fillThreeCups([amount[0] - indent, amount[1] - indent, amount[2]]);
  }
  return fillThreeCups(amount);
};

export { fillCups, fillCups2 };
