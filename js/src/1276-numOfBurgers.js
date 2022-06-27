/*
 * @lc app=leetcode.cn id=1276 lang=javascript
 *
 * [1276] 不浪费原料的汉堡制作方案
 */

// @lc code=start
/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
//  Your runtime beats 31.25 % of javascript submissions
const numOfBurgers = function(tomatoSlices, cheeseSlices) {
  // 4x + 2y = A
  // x + y = B
  // 求 A 和 B 的正整数解
  const x = (tomatoSlices - 2 * cheeseSlices) / 2;
  const y = cheeseSlices - x;
  if (x >= 0 && y >= 0 && x === Math.floor(x)) {
    return [x, y];
  }
  return [];
};
// @lc code=end

export { numOfBurgers };
