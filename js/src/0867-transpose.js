/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

//
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 执行用时：
// 100 ms
// , 在所有 JavaScript 提交中击败了
// 55.28%
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
const transpose = function(A) {
  const m = A.length;
  if (m === 0) return [];
  const n = A[0].length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(A[j][i]);
    }
    result.push(arr);
  }
  return result;
};
