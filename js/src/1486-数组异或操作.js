/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// 88 ms
// , 在所有 JavaScript 提交中击败了
// 39.20%
// 的用户
var xorOperation = function(n, start) {
  if (n === 1) return start;
  let a1;
  for (let i = 0; i < n; i++) {
    let tmp = start + 2 * i;
    if (i === 0) {
      a1 = tmp;
    }
    else {
      a1 = a1 ^ tmp;
    }    
  }
  return a1;
};
// @lc code=end

