/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 关键是不能使用除法
// 那么第一种方法是实际项目中使用的（最佳的使用除法）
// Your runtime beats 13.8 % of javascript submissions
const productExceptSelf1 = function(nums) {
  const len = nums.length;
  const index1 = nums.indexOf(0);
  // 如果有0
  if (index1 > -1) {
    const index2 = nums.lastIndexOf(0);
    if (index1 === index2) {
      const res = new Array(len).fill(0);
      const multi = nums.reduce((a, b) => {
        return b === 0 ? a : a * b;
      }, 1);
      res[index1] = multi;
      return res;
      // 有一个0
    } else {
      // 有多个0，那么全部返回的是0
      return new Array(len).fill(0);
    }
  }
  // 如果没有0
  const multi = nums.reduce((a, b) => a * b, 1);
  const res = new Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = multi / nums[i];
  }
  return res;
};

// 方法2：使用双数组
// 当前的结果等于前面的乘积 * 后面的乘积
// Your runtime beats 14.94 % of javascript submissions
const productExceptSelf2 = function(nums) {
  const len = nums.length;
  const index1 = nums.indexOf(0);
  // 如果有0
  if (index1 > -1) {
    const index2 = nums.lastIndexOf(0);
    if (index1 === index2) {
      const res = new Array(len).fill(0);
      const multi = nums.reduce((a, b) => {
        return b === 0 ? a : a * b;
      }, 1);
      res[index1] = multi;
      return res;
      // 有一个0
    } else {
      // 有多个0，那么全部返回的是0
      return new Array(len).fill(0);
    }
  }
  // 如果没有0
  const arr1 = new Array(len);
  arr1[0] = nums[0];
  const arr2 = new Array(len);
  arr2[len - 1] = nums[len - 1];
  for (let i = 1; i < len; i++) {
    arr1[i] = arr1[i - 1] * nums[i];
  }
  for (let i = len - 2; i >= 0; i--) {
    arr2[i] = arr2[i + 1] * nums[i];
  }
  const res = new Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = (arr1[i - 1] || 1) * (arr2[i + 1] || 1);
  }
  return res;
};
// @lc code=end

export { productExceptSelf1, productExceptSelf2 };
