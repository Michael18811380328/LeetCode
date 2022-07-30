/*
 * @lc app=leetcode.cn id=2303 lang=javascript
 *
 * [2303] 计算应缴税款总额
 */

// @lc code=start
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = function(brackets, income) {
  if (income === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < brackets.length; i++) {
    const backet = brackets[i];
    const lastValue = (brackets[i - 1] ? brackets[i - 1][0] : 0);
    if (income > backet[0]) {
      const curr = (backet[0] - lastValue) * backet[1] / 100;
      total += curr;
    } else {
      const curr = (income - lastValue) * backet[1] / 100;
      total += curr;
      return total;
    }
  }
  return total;
};
// console.log(calculateTax([[3,50],[7,10],[12,25]], 10) === 2.65);
// console.log(calculateTax([[1,0],[4,25],[5,50]], 2) === 0.25);
// console.log(calculateTax([[10,10]], 5) === 0.5);

// @lc code=end
export { calculateTax };
