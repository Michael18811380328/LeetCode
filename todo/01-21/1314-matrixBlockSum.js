/*
 * @lc app=leetcode.cn id=1314 lang=javascript
 *
 * [1314] 矩阵区域和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
// 思路一：暴力法
// Your runtime beats 28.13 % of javascript submissions
// 思路二：向右移动一个，那么就是加一列，减一列；向下移动一个，那么就是加一行，减一行
var matrixBlockSum = function(mat, K) {
  const len1 = mat.length;
  const len2 = mat[0].length;
  let res = new Array(len1);
  for (let i = 0; i < len1; i++) {
    res[i] = new Array(len2);
  }
  let getSum = function(i, j) {
    let startI = i - K;
    let endI = i + K;
    let startJ = j - K;
    let endJ = j + K;
    startI = startI < 0 ? 0 : startI;
    endI = endI > len1 - 1 ? len1 - 1: endI;
    startJ = startJ < 0 ? 0 : startJ;
    endJ = endJ > len2 - 1? len2 - 1: endJ;
    // console.log(startI, endI, startJ, endJ);
    let sum = 0;
    for (let i = startI; i <= endI; i++) {
      for (let j = startJ; j <= endJ; j++) {
        sum += mat[i][j];
      }
    }
    return sum;
  }
  // console.log(len1, len2);
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      // console.log(i, j);
      res[i][j] = getSum(i, j);
    }
  }
  return res;
};
// @lc code=end

