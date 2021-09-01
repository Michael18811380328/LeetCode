/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
// Your runtime beats 82.35 % of javascript submissions
var minDeletionSize = function(A) {
  const arrLen = A.length;
  if (arrLen === 0) return 0;
  const strLen = A[0].length;
  if (strLen < 2) return 0;
  let res = 0;
  // 处理特殊情况
  for (let i = 0; i < strLen; i++) {
    for (let j = 0; j < arrLen - 1; j++) {
      if (A[j][i].charCodeAt(0) > A[j + 1][i].charCodeAt(0)) {
        res++;
        break;
      }
    }
  }
  return res;
};
// @lc code=end

