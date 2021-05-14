/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 * [1822] 数组元素积的符号
 * 给定一个数字数组，判断数组的乘积是多少
 */

// 难度：简单
// 考点：数组API

/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1
// 92 ms, 在所有 JavaScript 提交中击败了40.98%
var arraySign = function(nums) {
  // 如果数组中有0，直接返回0
  if (nums.includes(0)) {
    return 0;
  }
  // 循环数组，判断负数的个数
  let minusTimes = 0;
  nums.forEach(item => {
    if (item < 0) {
      minusTimes++;
    }
  });
  // 然后求出结果
  return minusTimes % 2 === 0 ? 1 : -1;
};

// 改进思路
// 80 ms, 在所有 JavaScript 提交中击败了86.46%
var arraySign2 = function(nums) {
  // 循环数组，判断负数的个数
  let minusTimes = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    // 如果有0，那么直接返回0
    if (item === 0) {
      return 0;
    }
    if (item < 0) {
      minusTimes++;
    }
  }
  // 根据负数的个数，求出结果
  return minusTimes % 2 === 0 ? 1 : -1;
};

// todo: 先排序，然后判断数组元素的正负号，是否更快？
// todo: reduce 能否更快？arr.reduce((a, b) => { return a * b }, 1);
