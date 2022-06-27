/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// Your runtime beats 95.21 % of javascript submissions
const shuffle = function(nums, n) {
  const a = nums.slice(0, n);
  const b = nums.slice(n);
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }
  return res;
};
// @lc code=end
