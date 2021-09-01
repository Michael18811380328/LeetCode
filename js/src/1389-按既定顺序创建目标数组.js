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
var createTargetArray = function(nums, index) {
  let target = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let item = nums[i];
    let ind = index[i];
    target.splice(ind, 0, item);
  }
  return target;
};
// @lc code=end

