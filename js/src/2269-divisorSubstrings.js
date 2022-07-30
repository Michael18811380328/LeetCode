/*
 * @lc app=leetcode.cn id=2269 lang=javascript
 *
 * [2269] 找到一个数字的 K 美丽值
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 * Your runtime beats 89.08 % of javascript submissions
 */
const divisorSubstrings = function(num, k) {
  const str = String(num);
  let res = 0;
  for (let i = 0; i <= str.length - k; i++) {
    const curr = str.slice(i, i + k);
    if (num % Number(curr) === 0) {
      res++;
    }
  }
  return res;
};

// console.log(divisorSubstrings(240, 2), 2);
// console.log(divisorSubstrings(430043, 2), 2);
// @lc code=end
export { divisorSubstrings };
