/*
 * @lc app=leetcode.cn id=2169 lang=javascript
 *
 * [2169] 得到 0 的操作数
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 * 80 ms, 在所有 JavaScript 提交中击败了10.24%
 */
const countOperations = function(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    return 0;
  }
  if (num1 === num2) {
    return 1;
  }
  let times = 0;
  while (num1 !== num2) {
    if (num1 === 0 || num2 === 0) {
      return times;
    }
    const large = num1 > num2 ? num1 : num2;
    const small = num1 > num2 ? num2 : num1;
    const decrease = large - small;
    num1 = decrease;
    num2 = small;
    times++;
  }
  return times + 1;
};

// console.log(countOperations(10, 10) === 1)
// console.log(countOperations(2, 3) === 3)
// console.log(countOperations(0, 0) === 0)
// console.log(countOperations(0, 1) === 0)
// @lc code=end

export { countOperations };
