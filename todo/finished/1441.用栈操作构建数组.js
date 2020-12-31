/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// Your runtime beats 92.22 % of javascript submissions
var buildArray = function(target, n) {
  let res = [];
  let last = target[target.length - 1];
  let current = 1;
  for (let i = 0; i <= last; i++) {
    if (target[i] === current) {
      res.push('Push');
    } else {
      res.push('Push', 'Pop');
      i--;
    }
    current++;
    if (current > n || current > last) {
      break;
    }
  }
  return res;
};
// @lc code=end

