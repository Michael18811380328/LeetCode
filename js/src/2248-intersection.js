/*
 * @lc app=leetcode.cn id=2248 lang=javascript
 *
 * [2248] 多个数组求交集
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 * Your runtime beats 45.9 % of javascript submissions
 */
const intersection = function(nums) {
  const length1 = nums.length;
  const list = nums.flat().sort((a, b) => a > b ? 1 : -1);
  const res = [];
  let previous = list[0];
  let time = 1;
  for (let i = 1; i < list.length; i++) {
    if (list[i] === previous) {
      time++;
    } else {
      if (time === length1) {
        res.push(previous);
      }
      previous = list[i];
      time = 1;
    }
  }
  if (time === length1) {
    res.push(previous);
  }
  return res;
};
// @lc code=end
export { intersection };
