/*
 * @lc app=leetcode.cn id=1437 lang=javascript
 *
 * [1437] 是否所有 1 都至少相隔 k 个元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// [0,1,0,0,1,0,0,1] 2 true
// [0,1, 0,0,1,0,0,1] 2 true
var kLengthApart = function(nums, k) {
  if (k === 0) return true;
  const len = nums.length;
  let times = null;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      if (times !== null && times < k) {
        return false;
      }
      times = 0;
    } else {
      times = times === null ? times : times + 1;
    }
  }
  return true;
};
// @lc code=end

