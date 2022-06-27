/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// Your runtime beats 8.21 % of javascript submissions
const sumZero = function(n) {
  if (n === 1) return [0];
  let sum = 0;
  const arr = [];
  for (let i = 0; i < n - 1; i++) {
    arr.push(i);
    sum += i;
  }
  arr.push(-sum);
  return arr;
};
// @lc code=end
