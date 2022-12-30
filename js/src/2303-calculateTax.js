/**
 * [2303] 计算应缴税款总额
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

export { calculateTax };
