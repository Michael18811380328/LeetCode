/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// 这是最简单的思路：双循环
// Your runtime beats 15.85 % of javascript submissions
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (
        (Math.abs(i - j) <= k)
        && (Math.abs(nums[i] - nums[j]) <= t)
      ) {
        return true;
      }
    }
  }
  return false;
};

// 但是这种方法明显不好
// 在计算机科学中，关联数组（Associative Array），又称映射（Map）、字典（Dictionary）是一个抽象的数据结构，它包含着类似于（键，值）的有序对。
// 如何使用另一种方法实现
// @lc code=end
