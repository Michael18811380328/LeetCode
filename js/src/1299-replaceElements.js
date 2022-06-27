/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// Your runtime beats 63.71 % of javascript submissions
const replaceElements = function(arr) {
  const len = arr.length;
  const res = [-1];
  if (len === 1) {
    return res;
  }
  let max = arr[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    res.unshift(max);
    const curr = arr[i];
    if (curr > max) {
      max = curr;
    }
  }
  return res;
};
// @lc code=end

export { replaceElements };
