/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 常规的思路：使用对象存储出现的数字，这样可以很容易找到重复的数字
// 这里需要不使用额外的空间，所以使用数组的正负号实现
// Your runtime beats 92.51 % of javascript submissions
const findDuplicate = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = Math.abs(nums[i]);
    const index = item - 1;
    if (nums[index] < 0) {
      return item;
    }
    nums[index] = -nums[index];
  }
};
// @lc code=end
