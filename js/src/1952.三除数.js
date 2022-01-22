/*
 * @lc app=leetcode.cn id=1952 lang=javascript
 *
 * [1952] 三除数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 思路一：遍历数字，循环一次（如果N较大，性能不好）
var isThree = function(n) {
  let times = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      times++;
      if (times > 3) return false;
    }
  }
  return times === 3;
};

// 思路2 数学判断
// 如果一个数N是3除数，那么肯定能被 1 和 N 整除，那么剩余的一个就是 M
// 且 M * M === N, M 本身是一个质数，不能被其他的数字整除
// 这样直接计算即可，不需要遍历，性能比思路1好
// Your runtime beats 88.89 % of javascript submissions
var isThree = function(n) {
  // 0 特殊：1是质数，但是1不是三除数
  if (n === 1) {
    return false;
  }
  // 1 先开方
  let m = Math.sqrt(n);
  // 2 判断这个数是否是整数，如果不是整数，那么直接返回 false
  if (m !== Math.floor(m)) {
    return false;
  }
  // 辅助函数：判断是否是质数
  let isPrime = (num) => {
    if (num <= 3) return true;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true;
  }
  // 3 如果是整数，判断这个数是否是质数，这样性能就提升很多了
  return isPrime(m);
};
// @lc code=end

