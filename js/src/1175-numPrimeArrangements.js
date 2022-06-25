/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */
// 注意：数字很大时计算错误
// 需要取余数 let MOD = 10**9+7;
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 100 测试通过
// Your runtime beats 96.77 % of javascript submissions
const numPrimeArrangements = function(n) {
  const MOD = 1000000007;
  const arr = new Array(n).fill(true);
  arr[0] = false; // 1 不是质数
  for (let i = 1; i < n; i++) {
    // 当前的索引是1
    // 先通过动态规划计算N之内的质数的个数
    const index = i + 1; // 从2开始
    for (let j = 2; j <= n / index; j++) {
      arr[index * j - 1] = false;
    }
  }
  let a = 0; let
    b = 0;
  arr.forEach((item) => {
    item === true ? a++ : b++;
  });
  // 关键问题是这里的数字很大很大
  const factorial = function(a, b) {
    let res = 1;
    for (let i = 1; i <= a; i++) {
      res *= i;
      res = res % MOD;
    }
    for (let i = 1; i <= b; i++) {
      res *= i;
      res = res % MOD;
    }
    return res;
  };
  return factorial(a, b);
};
// @lc code=end

export { numPrimeArrangements };
