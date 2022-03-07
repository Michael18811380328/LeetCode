/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  Your runtime beats 74.2 % of javascript submissions
// 循环数组，类似双指针（一个记录最小值，一个记录当前的值）
const maximumDifference = function(nums) {
  let min = nums[0];
  let res = -1;
  for (let i = 1; i < nums.length; i++) {
    // 可能前后两个元素相等，这样不计算差值
    if (nums[i] <= min) {
      min = nums[i];
    } else {
      const current = nums[i] - min;
      if (current > res) {
        res = current;
      }
    }
  }
  return res;
};
// @lc code=end
