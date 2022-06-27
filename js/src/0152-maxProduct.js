/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 考点：动态规划
 * Fmax(x) = Math.max(nums[x], Fmax(x-1) * nums[x], Fmin(x-1) * nums[x])
 * Fmin(x) = Math.min(nums[x], Fmax(x-1) * nums[x], Fmin(x-1) * nums[x])
 */
// 72 ms, 在所有 JavaScript 提交中击败了50.30%
// 当前位置的最优解未必是由前一个位置的最优解转移得到的
// 因为当前的数字可能是正数或者负数，如果是负数，当前面是最小的情况
// 这时的结果是最大的，所以需要维护两个方程，然后三个数求最值
const maxProduct = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const maxArr = [];
  const minArr = [];
  maxArr[0] = nums[0];
  minArr[0] = nums[0];
  for (let i = 1; i < len; i++) {
    maxArr[i] = Math.max(nums[i], maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i]);
    minArr[i] = Math.min(nums[i], maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i]);
  }
  return Math.max(...maxArr);
};

// console.log(maxProduct([2,3,-2,4]) === 6);
// console.log(maxProduct([-2,0,-1]) === 0);
// console.log(maxProduct([-2,3,-4]) === 24);
// @lc code=end

export { maxProduct };
