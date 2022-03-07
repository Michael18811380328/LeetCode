/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 40.8 % of javascript submissions
const numIdenticalPairs = function(nums) {
  if (nums.length < 2) return 0;
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key]++;
  }
  let res = 0;
  for (const key in dict) {
    const value = dict[key];
    if (value > 1) {
      const tmp = value * (value - 1) / 2;
      res += tmp;
    }
  }
  return res;
};
// @lc code=end
