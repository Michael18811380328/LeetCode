/*
 * @lc app=leetcode.cn id=643 lang=javascript
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路1：循环所有子数组，然后依次求和，这样可以实现，性能不好
// 思路2：循环所有子数组，求和利用上一次的结果
// 112 ms, 在所有 JavaScript 提交中击败了71.43%的用户
const findMaxAverage = function(nums, k) {
  const n = nums.length;
  // 如果全部的数字小于给定的范围，测试一下
  if (n < k) {
    return null;
  }
  // 如果相等，那么直接求平均值
  else if (n === k) {
    return sum(nums) / k;
  } else {
    // n > k 选中的是一个子集
    const subArr = nums.slice(0, k);
    let max = sum(subArr);
    let currentSum = max;
    for (let i = k; i < n; i++) {
      currentSum = currentSum + nums[i] - nums[i - k];
      max = currentSum > max ? currentSum : max;
    }
    return max / k;
  }
};

// 辅助函数（求数组的和）
const sum = function(arr) {
  const fn = function(total, num) {
    return total + num;
  };
  return arr.reduce(fn, 0);
};
// @lc code=end

export { findMaxAverage };
