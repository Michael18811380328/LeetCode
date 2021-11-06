/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
// 80 ms, 在所有 JavaScript 提交中击败了80.00%
// 判断一个二维数组中，是否覆盖一个区间（离散的点）
// 当前 left - right 较短，这个算法可以
// 如果是较长的区间 [1000, 30000] 这种，那么时间空间复杂度很差
const isCovered = function(ranges, left, right) {
  const arr = new Array(51).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    const subRange = ranges[i];
    if (subRange[0] > right || subRange[1] < left) {
      continue;
    }
    for (let j = subRange[0]; j <= subRange[1]; j++) {
      arr[j] = 1;
    }
  }
  for (let i = left; i <= right; i++) {
    if (arr[i] === 0) {
      return false;
    }
  }
  return true;
};

export { isCovered };
