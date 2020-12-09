/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
// Your runtime beats 67.57 % of javascript submissions
var largestNumber = function(nums) {
  if (nums.length === 1) {
    return String(nums[0]);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = String(nums[i]);
  }
  nums.sort((a, b) => {
    return String(a) + String(b) > String(b) + String(a) ? -1 : 1
    // return b > a ? 1 : -1
  });
  // 这里的排序需要考虑多位相同的情况
  // console.log(nums);
  // [ '9', '5', '34', '30', '3' ]
  // [0,0]
  let res = nums.join('');
  while (res[0] === '0' && res.length > 1) {
    res = res.slice(1);
  }
  return res;
};
// @lc code=end

