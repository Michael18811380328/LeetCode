/**
 * [2160] 拆分数位后四位数字的最小和
 * @param {number} num
 * @return {number}
 * Your runtime beats 9.98 % of javascript submissions
 */
const minimumSum = function(num) {
  const arr = num.toString().split('').map((i) => Number(i)).sort((a, b) => a > b ? 1 : -1);
  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
};

// 60 ms, 在所有 JavaScript 提交中击败了65.56%
const minimumSum2 = function(num) {
  let a = num % 10;
  let b = (num - a) / 10 % 10;
  let c = (num - a - 10 * b) % 1000 / 100;
  let d = (num - a - 10 * b - 100 * c) / 1000;
  let arr = [a, b, c, d].sort((a, b) => a > b ? 1 : -1);
  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
};

export { minimumSum, minimumSum2 };
