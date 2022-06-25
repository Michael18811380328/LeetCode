/*
 * @lc app=leetcode.cn id=2210 lang=javascript
 *
 * [2210] 统计数组中峰和谷的数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 思路：波峰和波谷的特点就是左右的值变化
 * 那么可以首先遍历一次，把数组中相邻重复的值去掉，这样就避免了问题
 * Your runtime beats 74.4 % of javascript submissions
 */
const countHillValley = function(nums) {
  const arr = [];
  // 先去掉相邻相同的元素
  arr.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      arr.push(nums[i]);
    }
  }
  // 然后计算前后的元素不同的情况，就是波峰或者波谷的位置
  let res = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    const curr = arr[i];
    const before = arr[i - 1];
    const after = arr[i + 1];
    if (curr > before && curr > after) {
      res++;
    } else if (curr < before && curr < after) {
      res++;
    }
  }
  return res;
};
// @lc code=end
