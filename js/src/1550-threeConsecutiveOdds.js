/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// Your runtime beats 55.35 % of javascript submissions
const threeConsecutiveOdds = function(arr) {
  const len = arr.length;
  if (len < 3) return false;
  for (let i = 0; i <= len - 3; i++) {
    const f1 = arr[i] % 2;
    const f2 = arr[i + 1] % 2;
    const f3 = arr[i + 2] % 2;
    if (f1 && f2 && f3) {
      return true;
    }
    if (f3 === false) {
      i += 2;
    } else if (f2 === false) {
      i++;
    }
  }
  return false;
};
// @lc code=end

export { threeConsecutiveOdds };
