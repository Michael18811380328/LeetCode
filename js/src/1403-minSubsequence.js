/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 68.75 % of javascript submissions
const minSubsequence = function(nums) {
  if (nums.length === 1) return nums;
  const fn = function(a, b) {
    return a + b;
  };
  const sum = nums.reduce(fn, 0);
  const half = ((sum / 2) % 2 === 0) ? (sum / 2) + 1 : (sum / 2) + 0.5;
  nums.sort((a, b) => b - a);
  // 数组按照倒序排列
  let subSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    subSum += item;
    if (subSum >= half) {
      const innerArr = nums.slice(0, i + 1);
      return innerArr;
    }
  }
};
// @lc code=end

export { minSubsequence };
