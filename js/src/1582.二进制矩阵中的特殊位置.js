/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
// 38/95 cases passed (N/A)
// 这个思路比较复杂，首先考虑一个简单的思路实现
// var numSpecial = function(mat) {
//   let fn = (a, b) => a + b;
//   let dict = {};
//   for (let i = 0; i < mat.length; i++) {
//     let sum = mat[i].reduce(fn, 0);
//     if (sum === 0) {
//       mat.splice(i, 1);
//       i--;
//     } else if (sum > 1) {
//       dict[i] = true; // i 行不能用
//     }
//   }
//   // 如果出现了多次，那么应该记录，不应该删除
//   if (mat.length === 0) {
//     return 0;
//   }
//   let res = 0;
//   const len = mat[0].length;
//   for (let i = 0; i < len; i++) {
//     let sum = 0;
//     let tmp = 0;
//     for (let j = 0; j < mat.length; j++) {
//       sum += mat[j][i];
//       if (dict[j] === true) continue;
//       if (sum > 1) continue;
//     }
//     if (sum === 1) {
//       res++;
//     }
//   }
//   return res;
// };

// 思路二
// Your runtime beats 41.1 % of javascript submissions
var numSpecial = function(mat) {
  // 先删除空行
  // 辅助函数：求两个数的和
  let fn = (a, b) => a + b;

  // 辅助函数：判断一列是否和为1
  let sumFn = function(index){
    const len = mat.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += mat[i][index];
      if (sum > 1) return false;
    }
    return sum === 1;
  };

  let res = 0;
  for (let i = 0; i < mat.length; i++) {
    let sum = mat[i].reduce(fn, 0);
    if (sum === 0) {
      mat.splice(i, 1);
      i--;
    }
    else if (sum === 1) {
      // 行满足，获取列是否满足
      let index = mat[i].indexOf(1);
      if (sumFn(index)) res++;
    }
  }
  return res;
}
// @lc code=end

