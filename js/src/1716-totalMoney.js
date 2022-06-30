/**
 * @param {number} n
 * @return {number}
 */
// 思路一：数学方法计算
// 这个数先求7的余数和商
// 商 * （28） + （0 + 1 + 2+ 3+ 商 -1）* 7
// 余数 * 商 * 7 + 【1234567】求一部分
// 88 ms, 在所有 JavaScript 提交中击败了45.73%
// 优化后：72 ms, 在所有 JavaScript 提交中击败了98.17%
const totalMoney = function(n) {
  const a = n % 7; // 余数
  const b = (n - a) / 7; // 商
  let sum = 0;
  sum = sum + b * 28 + (((0 + b - 1) * b) / 2) * 7; // 商部分求和
  sum = sum + a * b;
  // let arr = [1,2,3,4,5,6,7];
  // for (let i = 0; i < a; i++) {
  //     sum += arr[i];
  // }
  if (a !== 0) {
    sum += ((1 + a) * a) / 2;
  }
  return sum;
};
// 思路二：动态规划(n = 1000 循环次数比较多，同时需要很长的数组)

export { totalMoney };
