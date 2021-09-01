/*
 * @lc app=leetcode.cn id=179 lang=javascript
 * [179] 最大数
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
// Your runtime beats 67.57 % of javascript submissions
var largestNumber = function(nums) {
  if (nums.length === 1) {
    return String(nums[0]);
  }
  // 先转换成字符串，然后按照最高位比较大小
  for (let i = 0; i < nums.length; i++) {
    nums[i] = String(nums[i]);
  }
  nums.sort((a, b) => {
    return String(a) + String(b) > String(b) + String(a) ? -1 : 1
  });
  // [ '9', '5', '34', '30', '3' ]
  let res = nums.join('');
  // [0,0] 这里处理特殊情况
  while (res[0] === '0' && res.length > 1) {
    res = res.slice(1);
  }
  return res;
};
