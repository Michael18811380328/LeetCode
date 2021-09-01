/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
// Your runtime beats 93.52 % of javascript submissions
var checkStraightLine = function(coordinates) {
  const len = coordinates.length;
  if (len === 2) return true;
  if (coordinates[1][0] - coordinates[0][0] === 0) {
    // 注意：处理斜率不存在的情况
    // 直接比较X是否相等
    for (let i = 1; i < len; i++) {
      if (coordinates[i][0] !== coordinates[0][0]) {
        return false;
      }
    }
    return true;
  } else {
    // 处理斜率存在的情况
    const K = ((coordinates[1][1] - coordinates[0][1]) /(coordinates[1][0] - coordinates[0][0]));
    for (let i = 1; i < len; i++) {
      let k = ((coordinates[i][1] - coordinates[0][1]) /(coordinates[i][0] - coordinates[0][0]));
      if (k !== K) {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end

