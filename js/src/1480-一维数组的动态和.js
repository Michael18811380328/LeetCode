/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 55.78 % of javascript submissions
var runningSum = function(nums) {
  const len = nums.length;
  if (len === 1) return nums;
  let tmp = 0;
  for (let i = 0; i < len; i++) {
    nums[i] = nums[i] + tmp;
    tmp = nums[i];
  }
  return nums;
};
// @lc code=end

