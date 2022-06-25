/*
 * @lc app=leetcode.cn id=2190 lang=javascript
 *
 * [2190] 数组中紧跟 key 之后出现最频繁的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
//  */
// // Your runtime beats 20.96 % of javascript submissions
// var mostFrequent = function(nums, key) {
//   // 这个就是遍历一次数组，然后获取后面一个数出现的最大次数即可
//   let dict = {};
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === key) {
//       let current = nums[i + 1];
//       if (!dict[current]) {
//         dict[current] = 0;
//       }
//       dict[current] = dict[current] + 1;
//     }
//   }
//   // 实际上在上面直接获取最大值即可，不需要下面的循环了
//   let max = 0;
//   let tmp;
//   for (let key in dict) {
//     let times = dict[key];
//     if (times > max) {
//       max = times;
//       tmp = key;
//     }
//   }
//   return tmp;
// };

// 改进后
// Your runtime beats 82.53 % of javascript submissions
const mostFrequent = function(nums, key) {
  const dict = {};
  let max = 0;
  let tmp;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const current = nums[i + 1];
      if (!dict[current]) {
        dict[current] = 0;
      }
      dict[current] = dict[current] + 1;
      if (dict[current] > max) {
        max = dict[current];
        tmp = current;
      }
    }
  }
  return tmp;
};
// @lc code=end

export { mostFrequent };
