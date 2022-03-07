/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// Your runtime beats 21.81 % of javascript submissions
const sumOddLengthSubarrays = function(arr) {
  const len = arr.length;
  let sum = getSum(arr); // 把长度是1的加起来
  if (len < 3) {
    return sum;
  } else if (len === 3) {
    return sum * 2;
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // i - j
      if ((j + 1 - i) % 2 === 1) {
        const sumArr = arr.slice(i, j + 1);
        const tmp = getSum(sumArr);
        sum += tmp;
      }
    }
  }
  return sum;
};

var getSum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};
// @lc code=end
