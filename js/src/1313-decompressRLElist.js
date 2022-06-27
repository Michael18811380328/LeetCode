/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Your runtime beats 48.15 % of javascript submissions
const decompressRLElist = function(nums) {
  const res = [];
  while (nums.length > 0) {
    const times = nums.shift();
    const num = nums.shift();
    const arr = new Array(times).fill(num);
    res.push(...arr);
  }
  return res;
};
// @lc code=end

export { decompressRLElist };
