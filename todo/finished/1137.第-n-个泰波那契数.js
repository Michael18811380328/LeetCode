/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// Your runtime beats 70.65 % of javascript submissions
var tribonacci = function(n) {
  if (n === 0) {
    return 0;
  }
  else if (n < 3) {
    return 1;
  }
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1] + arr[i - 3];
  }
  return arr[n];
};
// @lc code=end

