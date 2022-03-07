/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 这样写有问题，可能存在相同的值
// var secondHighest = function(s) {
//   const len = s.length;
//   let first, second;
//   for (let i = 0; i < len; i++) {
//     const curr = Number(s[i])
//     if (curr > 0) {
//       // 是数字
//       // 没有第一
//       if (!first) {
//         first = curr;
//       }
//       // 没有第二
//       else if (!second) {
//         second = first > curr ? curr : first;
//         first = first > curr ? first : curr;
//       }
//       // 有第一有第二
//       else {
//         if (curr > first) {
//           second = first;
//           first = curr;
//         }
//         else if (curr > second) {
//           second = curr;
//         }
//         // else curr < second, continue
//       }
//     }
//   }
//   return second ? second : -1;
// };

// 112 ms, 在所有 JavaScript 提交中击败了14.21%
const secondHighest = function(s) {
  const len = s.length;
  const nums = [];
  for (let i = 0; i < len; i++) {
    const curr = Number(s[i]);
    if (curr > -1) {
      nums.push(curr);
    }
  }
  const newNums = [...new Set(nums)].sort((a, b) => b - a);
  return newNums[1] > -1 ? newNums[1] : -1;
};
// @lc code=end
