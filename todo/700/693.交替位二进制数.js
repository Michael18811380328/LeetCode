/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// Your runtime beats 11.21 % of javascript submissions
var hasAlternatingBits = function(n) {
  const N = String(n);
  var fn = (str) => {
    return (str >>> 0).toString(2);
  }
  let bin = fn(N);
  // 这里可以优化，能否不使用循环
  for (let i = 1; i < bin.length; i++) {
    if (bin[i - 1] === bin[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

