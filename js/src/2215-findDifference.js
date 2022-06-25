/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * Your runtime beats 66.57 % of javascript submissions
 */
const findDifference = function(nums1, nums2) {
  // 数组去重，然后使用字典获取，再计入结果数组即可
  const nums_1 = [...new Set(nums1)];
  const nums_2 = [...new Set(nums2)];
  const dict1 = {};
  const dict2 = {};
  nums_1.forEach((item) => {
    dict1[item] = true;
  });
  nums_2.forEach((item) => {
    dict2[item] = true;
  });
  const res1 = nums_1.filter((item) => {
    if (dict2[item]) {
      return false;
    }
    return true;
  });
  const res2 = nums_2.filter((item) => {
    if (dict1[item]) {
      return false;
    }
    return true;
  });
  return [res1, res2];
};
// @lc code=end

export { findDifference };
