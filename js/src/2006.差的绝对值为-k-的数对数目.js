/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  Your runtime beats 74.37 % of javascript submissions
//  难度：简单
//  数组双循环，然后计算两个数的绝对值即可
const countKDifference = function(nums, k) {
  let times = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        times++;
      }
    }
  }
  return times;
};

//  能否使用Object优化一下到 On?
//  数组遍历一次，然后计算数字的个数，然后再遍历这个数组
//  去掉很多重复值，直接计算乘法，适合重复数字较多的情况
// 理论上可以（字典获取重复值，然后数组去重，计算绝对值）
// 需要测试

const countKDifference2 = function(nums, k) {
  const len = nums.length;
  // 存放出现的次数
  const dict = {};
  for (let i = 0; i < len; i++) {
    const key = nums[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key] = dict[key] + 1;
  }
  const arr = [...new Set(nums)];
  let times = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        times += dict[arr[i]] * dict[arr[j]];
      }
    }
  }
  return times;
};

// @lc code=end
