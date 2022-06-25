/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
//  Your runtime beats 7.47 % of javascript submissions
const nearestValidPoint = function(x, y, points) {
  // 辅助函数1
  const isValid = (point) => {
    return point[0] === x || point[1] === y;
  };
  // 辅助函数2
  const getDis = (point) => {
    return Math.abs(point[0] - x) + Math.abs(point[1] - y);
  };
  let min;
  let minIndex;
  let isOver = false;
  // 循环，获取最小值
  points.forEach((point, index) => {
    // 处理重合的点
    if (!isOver && point[0] === x && point[1] === y) {
      minIndex = index;
      isOver = true;
    }
    if (!isOver && isValid(point)) {
      const distance = getDis(point);
      if (!min && min !== 0) {
        min = distance;
        minIndex = index;
      } else if (min > distance) {
        min = distance;
        minIndex = index;
      }
    }
  });
  return minIndex > -1 ? minIndex : -1;
};

// console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]) === 2);
// console.log(nearestValidPoint(3, 4, [[3,4]]) === 0);
// console.log(nearestValidPoint(3, 4, [[2,3]]) === -1);
// @lc code=end
export { nearestValidPoint };
