/*
 * @lc app=leetcode.cn id=1920 lang=javascript
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 题目简单，数组的基本操作
//  Your runtime beats 95.95 % of javascript submissions
const buildArray = function(nums) {
  return nums.map((item, i) => nums[nums[i]]);
};
// @lc code=end
