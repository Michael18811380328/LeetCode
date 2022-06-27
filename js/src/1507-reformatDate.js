/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
// Your runtime beats 90.65 % of javascript submissions
const reformatDate = function(date) {
  const arr = date.split(' ');
  const year = arr[2];
  let month = arr[1];
  let day = arr[0];
  // 转换
  // 月变化
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let tmp = monthArr.findIndex((item) => item === month) + 1;
  tmp = String(tmp).padStart(2, '0');
  month = tmp;
  // 日变化
  if (day.length === 3) {
    day = day.slice(0, 1);
    day = day.padStart(2, '0');
  } else {
    day = day.slice(0, 2);
  }
  return `${year}-${month}-${day}`;
};
// @lc code=end
