/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// 第一种思路：每一次计算，然后二进制换换成十进制
// 由于A太长了，超出了2的53次幂了，导致求模不准，出错.这是个问题
// 第二种思路：每次计算的结果对10求余数，这样避免不会超出
// Your runtime beats 76.12 % of javascript submissions
const prefixesDivBy5 = function(A) {
  const len = A.length;
  let curr = 0;
  const res = [];
  for (let i = 0; i < len; i++) {
    curr = curr * 2 + A[i];
    const item = curr % 5 === 0;
    res.push(item);
    curr = curr % 10;
  }
  return res;
};
// @lc code=end
