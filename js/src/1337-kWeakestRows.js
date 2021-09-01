/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 方阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// 88 ms, 在所有 JavaScript 提交中击败了62.86%的用户
var kWeakestRows = function(mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let item = mat[i];
    let times = 0;
    for (let j = 0; j < item.length; j++) {
      if (item[j] === 0) {
        times = j;
        j = item.length;
      }
      if (j === item.length - 1) {
        times = item.length;
      }
    }
    arr.push({
      index: i,
      times: times,
    });
  }
  arr.sort((a, b) => {
    if (a.times === b.times) {
      return a.index > b.index ? 1 : -1;
    } else {
      return a.times > b.times ? 1 : -1;
    }
  });
  let tmp = arr.map(item => item.index);
  return tmp.slice(0, k);
};
// @lc code=end

