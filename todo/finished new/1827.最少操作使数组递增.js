/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// Your runtime beats 20.97 % of javascript submissions
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] <= nums[i - 1]) {
      let newNumber = nums[i - 1] + 1;
      sum += (newNumber - nums[i]);
      nums[i] = newNumber;
    }
  }
  return sum;
};
// @lc code=end

