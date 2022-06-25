/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */
// 第一种思路是先排序，然后比较，这种时间复杂度不太好
// 第二种思路是，遍历一次，通过字典找到重复的一个
// 然后再次遍历一次，找到确实的一个
// 这样比较消耗内存
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 93.89 % of javascript submissions
const findErrorNums = function(nums) {
  let error1;
  let error2;
  const len = nums.length;
  const dict = {};
  for (let i = 0; i < len; i++) {
    const key = nums[i];
    if (!dict[key]) {
      dict[key] = true;
    } else {
      error1 = key;
    }
  }
  for (let i = 0; i < len; i++) {
    if (!dict[i + 1]) {
      error2 = i + 1;
      break;
    }
  }
  return [error1, error2];
};

export { findErrorNums };
