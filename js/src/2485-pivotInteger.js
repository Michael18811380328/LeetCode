/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/find-the-pivot-integer/
 */
const pivotInteger = function(n) {
  if (n === 1) return 1;
  const sum = (1 + n) * n / 2;
  let tmp = 0;
  for (let i = 1; i < n; i++) {
    if (tmp === (sum - i) / 2) {
      return i;
    }
    if (tmp > sum / 2) return -1;
    tmp = tmp + i;
  }
  return -1;
};

// console.log(pivotInteger(1)) // 1
// console.log(pivotInteger(8)) // 6
// console.log(pivotInteger(4)) // -1
// console.log(pivotInteger(40)) // -1

export { pivotInteger };
