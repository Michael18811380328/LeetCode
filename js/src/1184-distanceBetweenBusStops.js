/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
// 84 ms
// , 在所有 JavaScript 提交中击败了
// 60.00%
// 的用户
const distanceBetweenBusStops = function(distance, start, destination) {
  let half = 0;
  let sum = 0;
  // 注意：start可能大于destination
  const a = Math.min(start, destination);
  const b = Math.max(start, destination);
  for (let i = 0; i < distance.length; i++) {
    const item = distance[i];
    sum += item;
    if (i >= a && i < b) {
      half += item;
    }
  }
  return Math.min(half, (sum - half));
};

// [7,10,1,12,11,14,5,0]
// 7
// 2
// @lc code=end
