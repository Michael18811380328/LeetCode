/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 76 ms
// , 在所有 JavaScript 提交中击败了
// 84.62%
var complexNumberMultiply = function(a, b) {
  // 先把字符串变成两部分
  let index = a.indexOf('+');
  let a1 = parseInt(a.slice(0, index));
  let a2 = parseInt(a.slice(index + 1, a.length - 1));
  // console.log(a1, a2);
  index = b.indexOf('+');
  let b1 = parseInt(b.slice(0, index));
  let b2 = parseInt(b.slice(index + 1, b.length - 1));
  // console.log(b1, b2);
  // 然后分别进行乘积
  let c1 = a1 * b1 + a2 * b2 * -1;
  let c2 = a2 * b1 + a1 * b2;
  // 最后拼起来（注意0）
  return `${c1}+${c2}i`;
};
// @lc code=end

