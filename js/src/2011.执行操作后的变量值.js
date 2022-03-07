/*
 * @lc app=leetcode.cn id=2011 lang=javascript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
// 这个是基本的数组操作，简单
// Your runtime beats 13.38 % of javascript submissions
const finalValueAfterOperations = function(operations) {
  let count = 0;
  operations.forEach((item) => {
    if (item === 'X++' || item === '++X') {
      count++;
    } else {
      count--;
    }
  });
  return count;
};
// @lc code=end
