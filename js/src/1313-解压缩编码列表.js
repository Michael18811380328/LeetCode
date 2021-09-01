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
var decompressRLElist = function(nums) {
  let res = [];
  while (nums.length > 0) {
    let times = nums.shift();
    let num = nums.shift();
    let arr = new Array(times).fill(num);
    res.push(...arr);
  }
  return res;
};
// @lc code=end

