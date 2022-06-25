/*
 * @lc app=leetcode.cn id=2206 lang=javascript
 *
 * [2206] 将数组划分成相等数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 直接循环一次，然后记录出现的次数，最后次数都是偶数即可
 * Your runtime beats 42.16 % of javascript submissions
 */
const divideArray = function(nums) {
  const dict = {};
  nums.forEach((item) => {
    if (!dict[item]) {
      dict[item] = true;
    } else {
      delete dict[item];
    }
  });
  return Object.keys(dict).length === 0;
  // console.log(divideArray([3,2,3,2,2,2]));
  // console.log(divideArray([1,2,3,4]));
};
// @lc code=end
