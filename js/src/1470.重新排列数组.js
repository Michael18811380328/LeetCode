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
var shuffle = function(nums, n) {
  let a = nums.slice(0, n);
  let b = nums.slice(n);
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }
  return res;
};
// @lc code=end

