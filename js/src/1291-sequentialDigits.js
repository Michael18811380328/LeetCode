/*
 * @lc app=leetcode.cn id=1291 lang=javascript
 *
 * [1291] 顺次数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
//  [10, 1000000000] 这个案例时间超出限制
// 思路1：基本思路：遍历一次数字，然后依次寻找符合条件的数字
// const sequentialDigits = function(low, high) {
//   let checkNum = (num) => {
//     let numStr = String(num);
//     const len = numStr.length;
//     for (let j = 1; j <= len - 1; j++) {
//       if (numStr[j] - numStr[j - 1] !== 1) {
//         return false;
//       }
//     }
//     return true;
//   };
//   let res = [];
//   for (let i = low; i <= high; i++) {
//     if (checkNum(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// };
// isSequence(1000, 13000);
// [1234,2345,3456,4567,5678,6789,12345]

// 思路2：但是这样性能不好（怎样优化性能？能否通过动态规划等优化？先实现基本效果再说）
// 可以从开始节点，然后依次增加，这样判断，这样效果会好一点

// 思路3：全部的满足的情况，不超过100个，那么直接进把满足的情况写成一个字典，然后遍历这个区间内的数字，这样也可以
// Your runtime beats 89.33 % of javascript submissions
const sequentialDigits = function(low, high) {
  const dict = [12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789];
  const res = [];
  for (let i = 0; i < dict.length; i++) {
    if (dict[i] >= low && dict[i] <= high) {
      res.push(dict[i]);
    }
  }
  return res;
};

// 继续改进，使用指针
// 还有问题，首尾测试
// 10
// 1000000000
// Your runtime beats 89.33 % of javascript submissions
const sequentialDigits = function(low, high) {
  const dict = [12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789];
  let start = -1;
  let end = dict.length;
  for (let i = 0; i < dict.length; i++) {
    if (dict[i] < low) {
      start = i;
    }
    if (dict[i] > high) {
      end = i;
      break;
    }
  }
  return dict.slice(start + 1, end);
};

// @lc code=end
