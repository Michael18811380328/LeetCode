/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
// Your runtime beats 83.33 % of javascript submissions
const sortArrayByParity = function(A) {
  const B = [];
  const C = [];
  const len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] % 2 === 1) {
      C.push(A[i]);
    } else {
      B.push(A[i]);
    }
  }
  return B.concat(C);
};
// @lc code=end

export { sortArrayByParity };
