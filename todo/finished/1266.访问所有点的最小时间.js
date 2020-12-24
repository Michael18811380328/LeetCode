/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// Your runtime beats 78.91 % of javascript submissions
var minTimeToVisitAllPoints = function(points) {
  let res = 0;
  const len = points.length;
  if (len === 1) return res;
  for (let i = 1; i < len; i++) {
    res += getDistance(points[i - 1], points[i]);
  }
  return res;
};

var getDistance = (a, b) => {
  const {abs, max} = Math;
  let x = abs(a[0] - b[0]);
  let y = abs(a[1] - b[1]);
  return max(x, y);
}
// @lc code=end

