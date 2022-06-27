/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 62.46 % of javascript submissions
const pivotIndex = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tmp === (sum - nums[i]) / 2) {
      return i;
    }
    tmp += nums[i];
  }
  return -1;
};
// @lc code=end
