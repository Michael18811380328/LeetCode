/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// 思路一：都转换成数字相加，然后再转换成数组
// 现在的问题是，A的长度很长（可能有10000的长度，是否超出区间？）

// 思路二：把K转换成数组（或者直接求余数，然后加到A的上面）
// 然后A从后向前进位一下（K范围是0-10000）不会很大
// 132 ms
// , 在所有 JavaScript 提交中击败了
// 92.59%
const addToArrayForm = function(A, K) {
  // 先把K转换成数组
  const B = [];
  while (K > 0) {
    const tmp = K % 10;
    B.push(tmp);
    K = (K - tmp) / 10;
  }
  // 然后把A和B从后向前加一下
  A.reverse();
  const len = Math.max(A.length, B.length);
  const C = [];
  for (let i = 0; i < len; i++) {
    C[i] = (A[i] || 0) + (B[i] || 0) + (C[i] || 0);
    if (C[i] > 9) {
      C[i] = C[i] - 10;
      C[i + 1] = 1;
    }
  }
  C.reverse();
  return C;
  // 最后再求反
};
// @lc code=end
