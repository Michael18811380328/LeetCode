/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 18.28 % of javascript submissions
var minStartValue = function(nums) {
  if (nums.length === 1 && nums[0] > 0) return 1;
  // 假设初始值是1，然后求过程中的最小值
  // 然后计算最小的整数
  let init = 1;
  let sum = nums[0];
  let min = init < sum ? init : sum;
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    min = min < sum ? min : sum;
  }
  return Math.max(1 - min, 1);
};
// @lc code=end

