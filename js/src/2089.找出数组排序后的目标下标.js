/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 先排序，然后获取目标的index，放在新数组中，很简单
// Your runtime beats 64.52 % of javascript submissions
const targetIndices = function(nums, target) {
  if (!nums.includes(target)) return [];
  nums = nums.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  const res = [];
  nums.forEach((item, index) => {
    if (item === target) {
      res.push(index);
    }
  });
  return res;
};
// @lc code=end
