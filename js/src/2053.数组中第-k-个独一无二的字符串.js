/*
 * @lc app=leetcode.cn id=2053 lang=javascript
 *
 * [2053] 数组中第 K 个独一无二的字符串
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
// Your runtime beats 44.36 % of javascript submissions
const kthDistinct = function(arr, k) {
  // 1. 遍历一次数组，找出没有重复的和没有重复的元素
  const dict = {};
  arr.forEach((item) => {
    if (!dict[item]) {
      dict[item] = 0;
    }
    dict[item] = dict[item] + 1;
  });
  // 2. 再遍历一次数组，把重复的筛掉，然后获取第K个
  const filter_arr = [];
  arr.forEach((item) => {
    if (dict[item] === 1) {
      filter_arr.push(item);
      if (filter_arr.length === k) {
        return filter_arr[k - 1];
      }
    }
  });
  return filter_arr[k - 1] || '';
};
// @lc code=end
