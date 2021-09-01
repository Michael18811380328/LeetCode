/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 基本的思路：数组的长度是100000
// 那么遍历两层，数据量可以接受，但是性能很不好
// 循环开始的索引，然后依次求出数组的最值，看看这个是否满足要求
// Your runtime beats 39.44 % of javascript submissions
var maxRotateFunction = function(nums) {
  let getRes = (start, len) => {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      const index = start + j > len - 1 ? start + j - len : start + j;
      sum = sum + nums[index] * j;
    }
    return sum;
  };
  const len = nums.length;
  let result = null;
  for (let i = 0; i < len; i++) {
    let currentRes = getRes(i, len);
    if (!result) {
      result = currentRes;
    } else {
      result = currentRes > result ? currentRes : result;
    }
  }
  return result;
};
// @lc code=end

