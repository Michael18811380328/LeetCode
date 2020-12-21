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
var numIdenticalPairs = function(nums) {
  if (nums.length < 2) return 0;
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key]++;
  }
  let res = 0;
  for (let key in dict) {
    let value = dict[key];
    if (value > 1) {
      let tmp = value * (value - 1) / 2;
      res += tmp;
    }
  }
  return res;
};
// @lc code=end

