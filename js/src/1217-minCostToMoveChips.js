/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 * [1217] 玩筹码
 */
// 考点：数学+数组
// 注：这个题干比较难理解，实际解答难度不大
// chips = [1,2,3]
// 这个的意思：有一个坐标，在1上放一个点，在2上放一个点，在3上放一个点
// chips = [2,2,2,3,3]
// 这个的意思：在2上放一个点，在2上放一个点，在2上放一个点，在3上放一个点，在3上放一个点
// 那么现在2上有三个点，3上有两个点
// 我们需要移动点。奇数位置移动到奇数位置，不消耗；偶数位置移动到偶数位置，不消耗。
// 那么我们可以首先移动全部的点到 1 和 2 上面，然后求这两个点的最小值，就是花费最少
// 进一步简化：求奇数的个数，和偶数的个数的最小值

// Your runtime beats 77.27 % of javascript submissions
/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function(position) {
  let odd = 0;
  let even = 0;
  const len = position.length;
  for (let i = 0; i < len; i++) {
    position[i] % 2 === 0 ? even++ : odd++;
  }
  return Math.min(odd, even);
};
