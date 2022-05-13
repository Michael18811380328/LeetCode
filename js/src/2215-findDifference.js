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
var findDifference = function(nums1, nums2) {
  // 数组去重，然后使用字典获取，再计入结果数组即可
  let nums_1 = [...new Set(nums1)];
  let nums_2 = [...new Set(nums2)];
  let dict1 = {};
  let dict2 = {};
  nums_1.forEach(item => {
    dict1[item] = true;
  });
  nums_2.forEach(item => {
    dict2[item] = true;
  });
  let res1 = nums_1.filter(item => {
    if (dict2[item]) {
      return false;
    }
    return true;
  });
  let res2 = nums_2.filter(item => {
    if (dict1[item]) {
      return false;
    }
    return true;
  });
  return [res1, res2];
};
// @lc code=end

