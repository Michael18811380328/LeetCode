/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// Your runtime beats 54.33 % of javascript submissions
var allCellsDistOrder = function(R, C, r0, c0) {
  let arr = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let item = [i, j];
      arr.push(item);
    }
  }
  // console.log(arr);
  arr.sort((a, b) => {
    let disA = Math.abs(a[0] - r0) + Math.abs(a[1] - c0);
    let disB = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
    return disA > disB ? 1 : -1;
  });
  return arr;
};
// @lc code=end

