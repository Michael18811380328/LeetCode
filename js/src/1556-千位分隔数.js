/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// Your runtime beats 84.75 % of javascript submissions
var thousandSeparator = function(n) {
  if (n < 1000) {
    return String(n);
  }
  let arr = [];
  while (n > 0) {
    let remain = n % 1000;
    n = (n - remain) / 1000;
    remain = String(remain);
    arr.push(remain);
  }
  arr.reverse();
  // 注意：补充0
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].padStart(3, '0');
  }
  return arr.join('.');
};
// @lc code=end

