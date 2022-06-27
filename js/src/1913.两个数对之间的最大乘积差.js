/*
 * @lc app=leetcode.cn id=1913 lang=javascript
 *
 * [1913] 两个数对之间的最大乘积差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 难度简单，数组排序
// 思路：数组排序，然后计算最大两个数和最小两个数的差
// 都是正整数，所以直接计算即可
// Your runtime beats 91.73 % of javascript submissions
const maxProductDifference = function(nums) {
  nums = nums.sort((a, b) => a - b < 0 ? 1 : -1);
  return nums[0] * nums[1] - nums[nums.length - 1] * nums[nums.length - 2];
};
// @lc code=end
export { maxProductDifference };
