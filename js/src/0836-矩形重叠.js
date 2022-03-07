/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// Your runtime beats 87.25 % of javascript submissions
// 看看更好的方法
// https://leetcode-cn.com/problems/rectangle-overlap/solution/
const isRectangleOverlap = function(rec1, rec2) {
  const x1 = rec1[0];
  const y1 = rec1[1];
  const x2 = rec1[2];
  const y2 = rec1[3];
  const x3 = rec2[0];
  const y3 = rec2[1];
  const x4 = rec2[2];
  const y4 = rec2[3];
  // 让一个矩形静止，另一个矩形只要在四个边外部，都不会重叠
  // [0,-1,0,1] 特殊情况: 如果一个不是矩形，那么肯定不想交
  if (x1 === x2 || y1 === y2 || x3 === x4 || y3 === y4) {
    return false;
  }
  if (
    (x1 <= x3 && x2 <= x3)
    || (x1 >= x4 && x2 >= x4)
    || (y1 <= y3 && y2 <= y3)
    || (y1 >= y4 && y2 >= y4)
  ) {
    return false;
  } else {
    return true;
  }
};
// [8,20,12,20]
// [14,2,19,11] true
// @lc code=end
