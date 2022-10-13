/*
 * @lc app=leetcode.cn id=2295 lang=javascript
 *
 * [2295] 替换数组中的元素
 * 考点：这道题使用对象保存数组原来的位置，以及调换后的位置
 * 调换过程操作对象，需要注意
 */

// @lc code=start
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
  // 这里把原来的位置先拿到，把键删除，然后加入新的键(实现替换)
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

// todo
// [[1,3],[2,1],[3,2]] 这种可以优化？
// console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]])) // [2,1]
// console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]])) // [3,2,7,1]
// @lc code=end

export { arrayChange };
