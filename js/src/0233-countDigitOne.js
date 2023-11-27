/**
 * @param {number} n
 * @return {number}
 * 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。0 <= n <= 10^9
 * 困难：递归、数学、动态规划
 */

// 思路1：从1循环到这个数；
// 数字很大就堆栈溢出 824883294, 这样的问题是：每一个都重新计算一次，最好可以放在对象中存储计算的结果；
// 对于上亿的数字，一次循环都不能使用
const countDigitOne1 = function(n) {
  // 辅助函数：计算这个数中多少个1
  function countOne(num) {
    let result = 0;
    while (num > 0) {
      if (num % 10 === 1) {
        result++;
      }
      num = (num - num % 10) / 10;
    }
    return result;
  }
  if (n <= 0) {
    return 0;
  }
  if (n <= 9) {
    return 1;
  }
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += countOne(i);
  }
  return result;
};

// 思路二: 把这些数全部相加成一个字符串，然后计算内部1字符串的个数，堆栈溢出 824883294
const countDigitOne2 = function(n) {
  // 0或者负数直接返回0
  if (n <= 0) {
    return 0;
  }
  if (n <= 9) {
    return 1;
  }
  let result = 0;
  for (let i = 0; i <= n; i++) {
    const str = `${i}`;
    const arr = str.split('');
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === '1') {
        result++;
      }
    }
  }
  return result;
};

// 自己前两个思路性能较差，下面是官方解答，主要是数学
// https://leetcode.cn/problems/number-of-digit-one/solution/shu-zi-1-de-ge-shu-by-leetcode-solution-zopq/
const countDigitOne3 = function(n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
    ans = ans + (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
    mulk = mulk * 10;
  }
  return ans;
};
// 将数位 DP 问题转化为计数类模拟题

export { countDigitOne1, countDigitOne2, countDigitOne3 };
