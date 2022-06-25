/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 90.79 % of javascript submissions
const subtractProductAndSum = function(n) {
  if (n < 10) {
    return 0;
  }
  let sum = 0;
  let product = 1;
  while (n > 0) {
    const remain = n % 10;
    n = (n - remain) / 10;
    sum += remain;
    product *= remain;
  }
  return product - sum;
};
// @lc code=end

export { subtractProductAndSum };
