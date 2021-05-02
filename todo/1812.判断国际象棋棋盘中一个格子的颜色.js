/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
// 80 ms, 在所有 JavaScript 提交中击败了80.62%
var squareIsWhite = function(coordinates) {
  const first = coordinates[0];
  const second = parseInt(coordinates[1]);
  if (first === 'a' || first === 'c' || first === 'e' || first === 'g')  {
    return second % 2 === 0 ? true : false;
  } else {
    return second % 2 === 0 ? false : true;
  }
};
// @lc code=end

