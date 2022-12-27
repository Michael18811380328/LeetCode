/*
 * @lc app=leetcode.cn id=2295 lang=javascript
 * [2295] 简单 替换数组中的元素
 * 考点：这道题使用对象保存数组原来的位置，以及调换后的位置
 */

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
//  Your runtime beats 30.91 % of javascript submissions
const arrayChange = function(nums, operations) {
  const dict = {};
  nums.forEach((item, index) => {
    dict[item] = index;
  });
  operations.forEach((item) => {
    const pos = dict[item[0]];
    delete dict[item[0]];
    dict[item[1]] = pos;
  });
  const res = [];
  for (const key in dict) {
    const value = dict[key];
    res[value] = key * 1;
  }
  return res;
};

export { arrayChange };
