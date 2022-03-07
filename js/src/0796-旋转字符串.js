/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// 第一个思路：循环一下A的长度，然后拼接字符串，看两个字符串是否相等
// 简单粗暴，可能拼接字符串会消耗性能
// Your runtime beats 31.06 % of javascript submissions
const rotateString = function(A, B) {
  if (A === B) return true;
  const aLen = A.length;
  const bLen = B.length;
  if (aLen !== bLen) return false;
  for (let i = 0; i < aLen; i++) {
    const a = A.slice(i) + A.slice(0, i);
    if (a === B) return true;
  }
  return false;
};

// 思路二
// 直接把A复制一下，然后这样A就拥有了全部的可能，然后判断A中是否有B
// 84 ms
// , 在所有 JavaScript 提交中击败了
// 48.48%
const rotateString = function(A, B) {
  if (A === B) return true;
  const aLen = A.length;
  const bLen = B.length;
  if (aLen !== bLen) return false;
  const a = A + A;
  return a.indexOf(B) > -1;
};
// @lc code=end
