/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 84.47 % of javascript submissions
var frequencySort = function(nums) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let = key = nums[i];
    if (!dict[key]) {
      dict[key] = 1;
    } else {
      dict[key]++;
    }
  }
  let arr = [];
  for (let key in dict) {
    let value = dict[key];
    let item = { key, value };
    arr.push(item);
  }
  arr.sort((a, b) => {
    if (a.value !== b.value) {
      return a.value > b.value ? 1 : -1
    } else {
      // key 如果是负数，需要先转换成正数
      return Number(a.key) < Number(b.key) ? 1 : -1;
    }
  });
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let tmp = new Array(item.value).fill(item.key);
    res = res.concat(tmp);
  }
  return res;
};
// @lc code=end

