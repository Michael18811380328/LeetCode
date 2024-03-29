/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// 72 ms, 在所有 JavaScript 提交中击败了98.40%
const kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((item) => {
    return (max - item) <= extraCandies;
  });
};
// @lc code=end

export { kidsWithCandies };
