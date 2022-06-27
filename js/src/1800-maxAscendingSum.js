/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * Your runtime beats 53.97 % of javascript submissions
 */
const maxAscendingSum = function(nums) {
  // 1、先获取数组最大值，处理数组降序的情况
  let max = Math.max(...nums);
  let tmp = nums[0];
  // 2、遍历数组，
  for (let i = 1; i < nums.length; i++) {
    // 2.1、后面比前面的大，就是升序，增加累加值
    if (nums[i] > nums[i - 1]) {
      tmp += nums[i];
    }
    // 如果后面小于前面，重新计算最大值
    else {
      if (tmp > max) {
        max = tmp;
      }
      tmp = nums[i];
    }
  }
  return Math.max(tmp, max);
};
// @lc code=end
export { maxAscendingSum };
