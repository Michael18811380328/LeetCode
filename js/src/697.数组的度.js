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
var findShortestSubArray = function(nums) {
  let dict = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!dict[key]) {
      dict[key] = {};
      dict[key].start = i;
    }
    dict[key].times = (dict[key].times || 0) + 1;
    max = max > dict[key].times ? max : dict[key].times;
    dict[key].end = i;
  }
  // console.log(dict, max);
  // times 最大，start - end 最小的情况
  if (max === 1) {
    return 1;
  }
  let minLen;
  for (let key in dict) {
    let item = dict[key];
    if (item.times === max) {
      let tmp = item.end - item.start + 1;
      // console.log(tmp);
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

