/**
 * @param {number[]} gain
 * @return {number}
 */
// 84 ms, 在所有 JavaScript 提交中击败了52.25%
const largestAltitude = function(gain) {
  const res = [0];
  const len = gain.length;
  for (let i = 0; i < len; i++) {
    res[i + 1] = res[i] + gain[i];
  }
  return Math.max(...res);
};

// 优化，不需要使用数组存储海拔
// 直接使用两个临时变量（一个存储上一个的值，一个存储最大值即可）
// 64 ms runtime beats 92.73 % of javascript submissions
const largestAltitude2 = function(gain) {
  let max = 0;
  let current = 0;
  const len = gain.length;
  for (let i = 0; i < len; i++) {
    const item = gain[i];
    current += item;
    if (max < current) {
      max = current;
    }
  }
  return max;
};

export { largestAltitude, largestAltitude2 };
