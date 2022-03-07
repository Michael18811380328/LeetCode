/**
 * @param {number[]} nums
 * @return {number}
 */

// 第一种：直接根据定义获取，用于生产环境
// const findMin = function(nums) {
//   return Math.min(...nums);
// };

// 第二种，循环获取
const findMin = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
};

export { findMin };
