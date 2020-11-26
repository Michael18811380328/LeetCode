/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 * [1295] 统计位数为偶数的数字
 */

// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  // 循环数组
  // 然后判断每一个数字的位数
  let res = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let item = String(nums[i]).length;
    if (item % 2 === 0) res++
  }
  return res;
};
