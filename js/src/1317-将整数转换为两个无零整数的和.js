/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// Your runtime beats 76.06 % of javascript submissions
const getNoZeroIntegers = function(n) {
  // 随机法比较好
  let a = Math.floor(Math.random() * n);
  let b = n - a;
  while (!jedge(a) || !jedge(b)) {
    a = Math.floor(Math.random() * n);
    b = n - a;
  }
  return [a, b];
};

const jedge = function(a) {
  if (a <= 0) return false;
  while (a > 0) {
    if (a % 10 === 0) {
      return false;
    }
    const re = a % 10;
    a = (a - re) / 10;
  }
  return true;
};
// @lc code=end
