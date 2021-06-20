/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
//80 ms, 在所有 JavaScript 提交中击败了80.00%
var isCovered = function(ranges, left, right) {
  let arr = new Array(51).fill(0);
  for (let i = 0; i < ranges.length; i++) {
      let subRange = ranges[i];
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