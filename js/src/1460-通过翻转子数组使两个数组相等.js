/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// Your runtime beats 93.3 % of javascript submissions
const canBeEqual = function(target, arr) {
  const len1 = target.length;
  const len2 = arr.length;
  if (len1 !== len2) {
    return false;
  }
  // 排序这里消耗性能，可以遍历一次，记录出现的次数即可
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < len1; i++) {
    if (arr[i] !== target[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
