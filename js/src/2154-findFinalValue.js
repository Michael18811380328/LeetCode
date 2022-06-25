/*
 * @lc app=leetcode.cn id=2154 lang=javascript
 *
 * [2154] 将找到的值乘以 2
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 * Your runtime beats 59.5 % of javascript submissions
 */
const findFinalValue = function(nums, original) {
  const set = new Set(nums);
  while (set.has(original)) {
    original *= 2;
  }
  return original;
};
// @lc code=end

export { findFinalValue };
