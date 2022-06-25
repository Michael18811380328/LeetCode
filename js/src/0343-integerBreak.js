/**
 * @param {number} n
 * @return {number}
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 */
// 示例 1:
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。

// 示例 2:
// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

// 找规律
// 尽量不选择1（）
// 2 = 1 + 1 => 1
// 3 = 1 + 2 => 2
// 4 = 2 + 2 => 4
// 5 = 2 + 3 => 6
// 尽量分解成3的倍数和4的倍数

// 动态规划？
// 首先除以3，商是 N，看余数是 012
// 如果是0，那么直接返回 3  ^ n
// 如果是1，那么直接返回 3 ^ (n - 1) * 4
// 如果是2，直接返回 3 ^ n * 2

const integerBreak = function(n) {
  if (n <= 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  const b = n % 3;
  const a = (n - b) / 3;
  if (b === 0) {
    return 3 ** a;
  }
  if (b === 1) {
    return 3 ** (a - 1) * 4;
  }
  if (b === 2) {
    return 3 ** a * 2;
  }
};
