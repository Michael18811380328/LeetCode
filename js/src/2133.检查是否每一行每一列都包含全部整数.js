/*
 * @lc app=leetcode.cn id=2133 lang=javascript
 *
 * [2133] 检查是否每一行每一列都包含全部整数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// 思路
// 1、横向纵向遍历矩阵，把每一个情况都拿出来
// 2、判断每一行和每一列，是否有重复的（如果有重复的，一定不满足）
// 当前用子数组实现（占用内存略大）
// N 不超过100，时间空间复杂度可以接受
// Your runtime beats 50.94 % of javascript submissions
var checkValid = function(matrix) {
  // 辅助函数：判断一个数组是否有重复元素
  const checkArr = (arr) => {
    return arr.length === [...new Set(arr)].length;
  }
  // 1.1 横向遍历
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (!checkArr(matrix[i])) {
      return false;
    }
  }
  // 1.2 纵向遍历
  for (let i = 0; i < n; i++) {
    let tmpArr = [];
    for (let j = 0; j < n; j++) {
      tmpArr.push(matrix[j][i]);
    }
    if (!checkArr(tmpArr)) {
      return false;
    }
  }
  return true;
};

// console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]]) === true)
// console.log(checkValid([[1,1,1],[1,2,3],[1,2,3]]) === false)
// @lc code=end

