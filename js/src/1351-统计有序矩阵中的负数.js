/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路1：最基本的算法-双重循环
// Your runtime beats 63.02 % of javascript submissions
// var countNegatives = function(grid) {
//   let sum = 0;
//   for (let i = 0; i < grid.length; i++) {
//     let item = grid[i];
//     for (let j = 0; j < item.length; j++) {
//       if (item[j] < 0) {
//         sum++;
//       }
//     }
//   }
//   return sum;
// };

// 思路二：改进后
// Your runtime beats 89.94 % of javascript submissions
var countNegatives = function(grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    let item = grid[i];
    for (let j = 0; j < item.length; j++) {
      if (item[j] < 0) {
        sum += item.length - j;
        j = item.length;
      }
    }
  }
  return sum;
};

// 思路3：二分法获取当期行的负数的开始位置
// @lc code=end

