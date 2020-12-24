/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
// Your runtime beats 84.72 % of javascript submissions
var daysBetweenDates = function(date1, date2) {
  let a = new Date(date1);
  let b = new Date(date2);
  return Math.abs((b.getTime() - a.getTime()) / 1000 / 3600 / 24);
};
// @lc code=end

