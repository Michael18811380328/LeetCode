/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
// 直接找到前两个路径的公共节点即可
// Your runtime beats 90 % of javascript submissions
const findCenter = function(edges) {
  const p1 = edges[0][0];
  const p2 = edges[0][1];
  const p3 = edges[1][0];
  const p4 = edges[1][1];
  if (p1 === p3 || p1 === p4) {
    return p1;
  }
  return p2;
};
// @lc code=end
