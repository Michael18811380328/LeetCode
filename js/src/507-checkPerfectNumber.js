// 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
// 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
// 示例：
// 输入: 28
// 输出: True
// 解释: 28 = 1 + 2 + 4 + 7 + 14

// 思路：关键是计算全部的正因子
// 循环计算，然后放在数组中，然后求和判断是否是这个数
// 特殊情况处理 25 = 5 * 5
// 注意：01需要特殊处理
/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  let result = 1;
  for (let i = 2, len = Math.sqrt(num); i <= len; i++) {
    if (num % i === 0) {
      result += i;
      result += num / i;
    }
  }
  return result === num;
}

export { checkPerfectNumber };
