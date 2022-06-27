/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * https://leetcode-cn.com/problems/maximum-subarray/
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：双重循环，把全部的子序列求出来，然后求最大值(n^2)，数组求和多次
const maxSubArray = function(nums) {
  // 辅助函数：求数组的和
  const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  const len = nums.length;
  // 如果长度是1，直接返回
  if (len === 1) {
    return nums[0];
  }
  // 开始双重遍历
  // 先把子系列长度是1的情况全部拿出来，以及全部长度的和拿出来，并求出当前的最大值
  let max = Math.max(...nums, sum(nums));

  // 外循环 i 是子序列的长度
  for (let i = 2; i < len; i++) {
    // 先计算从 0 到 i 的和
    let currSum = sum(nums.slice(0, i));
    max = currSum > max ? currSum : max;
    // 内循环 j 是子序列开始的位置（依次求长度是i 开始位置是 j 的子序列的和）
    for (let j = i; j < len; j++) {
      currSum = currSum + nums[j] - nums[j - i];
      max = currSum > max ? currSum : max;
    }
  }
  return max;
};

// 思路2：动态规划(n)
// 如果数组增加一项，那么求增加一项的最大值
// 1 最大自序和，可以转换成以每一个项为结尾的子序的最大值 max = for（range(fn(1), fn(n)）)
// 2 递推公式：fn = Math.max(fn(n - 1) + num[n], num[n]) 这是关键
// 以当前数字结尾的子序列的最大值，可能是这个数字，或者这个数字和前面的全部相加
const maxSubArray = function(nums) {
  let currMax = 0;
  // 第一项的值作为最大值
  // 把每增加一项的最大值求出来，放在一个数组中，最后求这个数组的和（不是直接求最大子序的和）
  const maxList = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    // 增加一项，求1次最大值
    currMax = Math.max(currMax + nums[i], nums[i]);
    maxList.push(currMax);
  }
  return Math.max(...maxList);
};
// @lc code=end
