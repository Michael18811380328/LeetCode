/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 86.73 % of javascript submissions
const dominantIndex = function(nums) {
  const len = nums.length;
  // 只有一个元素，满足条件
  if (len === 1) {
    return 0;
  } else if (len === 2) {
    if (nums[0] >= nums[1] * 2) {
      return 0;
    } else if (nums[1] >= nums[0] * 2) {
      return 1;
    } else {
      return -1;
    }
  }
  // 数组中有三个数，那么循环获取最大和第二大的数字
  let max = nums[0] > nums[1] ? nums[0] : nums[1];
  let subMax = nums[0] < nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < len; i++) {
    const item = nums[i];
    if (item > max) {
      subMax = max;
      max = item;
    } else if (item > subMax) {
      subMax = item;
    }
  }

  if (max >= 2 * subMax) {
    return nums.indexOf(max);
  } else {
    return -1;
  }
};
// @lc code=end
