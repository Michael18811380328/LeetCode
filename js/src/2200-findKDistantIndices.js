/*
 * @lc app=leetcode.cn id=2200 lang=javascript
 *
 * [2200] 找出数组中的所有 K 近邻下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 * Your runtime beats 9.72 % of javascript submissions
 * 现在性能不太好，第二次循环有很多重复的
 */
const findKDistantIndices = function(nums, key, k) {
  const tmp = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === key) {
      const middle = i;
      for (let j = middle - k; j <= middle + k; j++) {
        if (j >= 0 && j < len) {
          tmp.push(j);
        }
      }
    }
  }
  return Array.from(new Set(tmp));
};
// @lc code=end
