/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// Your runtime beats 90.18 % of javascript submissions
var fairCandySwap = function(A, B) {
  let sumA = A.reduce((a, b) => a + b, 0);
  let sumB = B.reduce((a, b) => a + b, 0);
  let sub = (sumB - sumA) / 2;
  let answer = [];
  let dict = {};
  for (let i = 0; i < B.length; i++) {
    let key = B[i];
    dict[key] = true;
  }
  for (let i = 0; i < A.length; i++) {
    let item = A[i];
    let key = item + sub
    if (dict[key]) {
      answer[0] = item;
      answer[1] = key;
      return answer;
    }
  }
};
// @lc code=end

