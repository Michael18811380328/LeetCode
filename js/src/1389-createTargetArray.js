/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
// 100 ms
// , 在所有 JavaScript 提交中击败了
// 13.78%
// 的用户
const createTargetArray = function(nums, index) {
  const target = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const ind = index[i];
    target.splice(ind, 0, item);
  }
  return target;
};
// @lc code=end
