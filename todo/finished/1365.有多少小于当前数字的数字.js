/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 93.53 % of javascript submissions
var smallerNumbersThanCurrent = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(i);
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    // 前面应该有i-1个元素
    let item = nums[i];
    let indexArr = hash[item];
    for (let j = 0; j < indexArr.length; j++) {
      let index = indexArr[j];
      res[index] = i;
    }
    i = i + indexArr.length - 1;
  }
  return res;
};
// @lc code=end

