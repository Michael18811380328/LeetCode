/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
// Your runtime beats 68.63 % of javascript submissions
var partitionDisjoint = function(A) {
  let min = Math.min(...A);
  let left = A.lastIndexOf(min);
  // console.log(left);
  while (Math.max(...A.slice(0, left)) > Math.min(...A.slice(left + 1))) {
    // 找到右边的最小值，然后继续求最大值和最小值
    let tmp = Math.min(...A.slice(left + 1));
    // console.log(tmp);
    left = A.lastIndexOf(tmp);
  }
  if (A[left] === Math.min(...A.slice(0, left))) {
    while (A[left - 1] && A[left - 1] === A[left]) {
      left--;
    }
  }
  return left + 1;
};

// @lc code=end

