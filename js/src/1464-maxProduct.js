/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 89.64 % of javascript submissions
const maxProduct = function(nums) {
  if (nums.length === 2) {
    return (nums[0] - 1) * (nums[1] - 1);
  }
  let max = (nums[0] - 1) * (nums[1] - 1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const cur = (nums[i] - 1) * (nums[j] - 1);
      max = max > cur ? max : cur;
    }
  }
  return max;
};

// 是否有更好的方法？例如先排序，获取最值
// 然后计算比较好（减少循环的次数）？
// @lc code=end
