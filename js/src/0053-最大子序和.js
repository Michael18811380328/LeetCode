/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：直接双重循环，把全部的子序列求出来，然后求最大值
// 这个办法不太好，可以解决问题(n^2)
var maxSubArray = function(nums) {
  // 辅助函数：求数组的和
  let sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  const len = nums.length;
  // 如果长度是1，直接返回即可
  if (len === 1) {
    return nums[0];
  }
  // 如果长度大于1，开始遍历
  // 先把子系列长度是1的情况全部拿出来，以及全部长度的和拿出来
  // 并求出最大值
  let max = Math.max(...nums, sum(nums));
  for (let i = 2; i < len; i++) {
    let currSum = sum(nums.slice(0, i));
    max = currSum > max ? currSum : max;
    for (j = i; j < len; j++) {
      currSum = currSum + nums[j] - nums[j - i];
      max = currSum > max ? currSum : max;
    }
  }
  return max;
};

// 思路2：动态规划(n)
// 1 最大自序和，可以转换成以每一个项为结尾的子序的最大值 max = for（range(fn(1), fn(n)）)
// 2 递推公式：fn = Math.max(fn(n - 1) + num[n], num[n]) 这是关键
// 以当前数字结尾的子序列的最大值，可能是这个数字，或者这个数字和前面的全部相加
var maxSubArray = function(nums) {
  let currMax = 0;
  let maxList = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i]);
    maxList.push(currMax);
  }
  return Math.max(...maxList);
};
// @lc code=end


