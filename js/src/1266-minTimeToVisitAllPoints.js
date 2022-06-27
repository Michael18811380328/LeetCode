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
const minTimeToVisitAllPoints = function(points) {
  // 辅助函数
  const getDistance = (a, b) => {
    const { abs, max } = Math;
    const x = abs(a[0] - b[0]);
    const y = abs(a[1] - b[1]);
    return max(x, y);
  };

  let res = 0;
  const len = points.length;
  if (len === 1) return res;
  for (let i = 1; i < len; i++) {
    res += getDistance(points[i - 1], points[i]);
  }
  return res;
};
// @lc code=end

export { minTimeToVisitAllPoints };
