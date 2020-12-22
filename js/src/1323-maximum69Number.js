/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */
/**
 * @param {number} num
 * @return {number}
 */
// Your runtime beats 6.98 % of javascript submissions
// 应该直接使用数学计算，
// 不应该使用字符串
var maximum69Number  = function(num) {
  let str = String(num);
  let index = str.indexOf('6');
  if (index === -1) return num;
  let res = str.slice(0, index) + '9' + str.slice(index + 1);
  return Number(res);
};