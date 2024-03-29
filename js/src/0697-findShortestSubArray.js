/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 93.43 % of javascript submissions
const findShortestSubArray = function(nums) {
  const dict = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (!dict[key]) {
      dict[key] = {};
      dict[key].start = i;
    }
    dict[key].times = (dict[key].times || 0) + 1;
    max = max > dict[key].times ? max : dict[key].times;
    dict[key].end = i;
  }
  // times 最大，start - end 最小的情况
  if (max === 1) {
    return 1;
  }
  let minLen;
  for (const key in dict) {
    const item = dict[key];
    if (item.times === max) {
      const tmp = item.end - item.start + 1;
      if (minLen >= 0) {
        minLen = minLen < tmp ? minLen : tmp;
      } else {
        minLen = tmp;
      }
    }
  }
  return minLen;
};
// @lc code=end

export { findShortestSubArray };
