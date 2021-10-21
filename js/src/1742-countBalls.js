/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 * 你在一家生产小球的玩具厂工作，有 n 个小球，编号从 lowLimit 开始，到 highLimit 结束（包括 lowLimit 和 highLimit ，即 n == highLimit - lowLimit + 1）。另有无限数量的盒子，编号从 1 到 infinity 。
 * 你的工作是将每个小球放入盒子中，其中盒子的编号应当等于小球编号上每位数字的和。例如，编号 321 的小球应当放入编号 3 + 2 + 1 = 6 的盒子，而编号 10 的小球应当放入编号 1 + 0 = 1 的盒子。
 * 给你两个整数 lowLimit 和 highLimit ，返回放有最多小球的盒子中的小球数量。如果有多个盒子都满足放有最多小球，只需返回其中任一盒子的小球数量。
 */

// 难度：简单
// 考点：数字求和；数字转换成对象
// 120 ms, 在所有 JavaScript 提交中击败了79.44%
var countBalls = function(lowLimit, highLimit) {
  // 辅助函数：计算一个正数的每一位的和
  var getSum = (num) => {
    let res = 0;
    while (num > 0) {
      let a = num % 10;
      res += a;
      num = (num - a) / 10;
    }
    return res;
  }
  
  // 循环数字；把和放在字典中
  let dict = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = getSum(i);
    if (!dict[sum]) {
      dict[sum] = 1;
    } else {
      dict[sum]++;
    }
  }
  
  // 计算字典中数出现次数最多的数字
  let max = 1;
  for (let key in dict) {
    let value = dict[key];
    if (value > max) {
      max = value;
    }
  }
  return max;
};
