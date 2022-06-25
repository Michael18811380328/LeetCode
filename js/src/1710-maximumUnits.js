/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// 基本思路：贪心算法
// 先按照箱子的权重排序，然后遍历数组，获取最大值即可
// 92 ms, 在所有 JavaScript 提交中击败了86.63%
const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    return a[1] > b[1] ? -1 : 1;
  });
  let sum = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const item = boxTypes[i];
    if (truckSize > item[0]) {
      sum += item[0] * item[1];
      truckSize -= item[0];
    } else {
      sum += truckSize * item[1];
      return sum;
    }
  }
  return sum;
};

export { maximumUnits };
