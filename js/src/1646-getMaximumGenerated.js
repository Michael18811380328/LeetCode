/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 38.1 % of javascript submissions
const getMaximumGenerated = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  const arr = [0, 1];
  let max = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i / 2];
    } else {
      arr[i] = arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1];
    }
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
};
// @lc code=end
export { getMaximumGenerated };
