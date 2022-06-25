/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// Your runtime beats 91.11 % of javascript submissions
const findSpecialInteger = function(arr) {
  const length = arr.length;
  if (length < 3) return arr[0];
  const len = length / 4;
  let current = arr[0];
  let times = 1;
  for (let i = 1; i < length; i++) {
    if (arr[i] === current) {
      times++;
      if (times > len) {
        return current;
      }
    } else {
      current = arr[i];
      times = 1;
    }
  }
  return arr[0];
};
// @lc code=end

export { findSpecialInteger };
