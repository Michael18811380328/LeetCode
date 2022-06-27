/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// Your runtime beats 57 % of javascript submissions
const hIndex = function(citations) {
  const len = citations.length;
  if (len === 0) {
    return 0;
  }
  citations.sort((a, b) => b - a);
  if (citations[0] === 0) {
    return 0;
  }
  let result = 1;
  for (let i = 0; i < len; i++) {
    if (citations[i] >= i + 1) {
      const tmp = Math.min(citations[i], i + 1);
      result = tmp > result ? tmp : result;
    }
  }
  return result;
};

// 测试案例
// [] 0
// [0] 0
// [100] 1
// [11,15] 2
// [4,4,0,0] 2
// @lc code=end

export { hIndex };
