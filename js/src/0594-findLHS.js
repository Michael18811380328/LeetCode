/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// const findLHS = function(nums) {
// let dict = {};
// const len = nums.length;
// for (let i = 0; i < len; i++) {
//   let key = nums[i];
//   dict[key] ? dict[key]++ : dict[key] = 1;
// }
// let arr = [];
// // console.log(dict);
// // 循环dictionary
// for (let key in dict) {
//   if (key >= 0) {
//     arr[key] = dict[key];
//   }
// }
//   let longest = 0;
//   let lastIndex;
//   let lastTimes;
//   // console.log(arr);
//   arr.forEach((item, index) => {
//     if (index === lastIndex + 1) {
//       let times = lastTimes + item;
//       longest = longest > times ? longest : times;
//     }
//     lastIndex = index;
//     lastTimes = item;
//   });

//   // 处理负数
//   arr = [];
//   for (let key in dict) {
//     if (key <= 0) {
//       let newKey = -parseInt(key);
//       // console.log(newKey);
//       arr[newKey] = dict[key];
//     }
//   }
//   // console.log(arr);
//   arr.forEach((item, index) => {
//     if (index === lastIndex + 1) {
//       let times = lastTimes + item;
//       longest = longest > times ? longest : times;
//     }
//     lastIndex = index;
//     lastTimes = item;
//   });
//   return longest;
// };
// [-1,0,-1,0,-1,0,-1] 需要考虑负数
// [35005211,21595368,94702567,26956429,36465782,61021530,78722862,33665123,45174067,68703135]
// 超时，这个思路不行

// 分成两部分存储
// 一个数组，单独存放数值
// 一个对象，存放不同数字出现的次数
// Your runtime beats 59.62 % of javascript submissions
const findLHS = function(nums) {
  const dict = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const key = nums[i];
    dict[key] ? dict[key]++ : dict[key] = 1;
  }
  const arr = [];
  for (const key in dict) {
    arr.push(parseInt(key));
  }
  arr.sort((a, b) => a - b);
  let longest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      const key1 = String(arr[i]);
      const key2 = String(arr[i - 1]);
      const times = dict[key1] + dict[key2];
      longest = longest > times ? longest : times;
    }
  }
  return longest;
};
// @lc code=end

export { findLHS };
