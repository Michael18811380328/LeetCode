/*
 * @lc app=leetcode.cn id=260 lang=javascript
 * [260] 只出现一次的数字 III
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 27.68 % of javascript submissions
const singleNumber = function(nums) {
  const len = nums.length;
  if (len === 2) {
    return nums;
  }
  const dict = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (dict[item]) {
      delete dict[item];
    } else {
      dict[item] = true;
    }
  }
  return Object.keys(dict);
};
// @lc code=end

export { singleNumber };
