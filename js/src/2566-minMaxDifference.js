/**
 * @param {number} num
 * @return {number}
 * 64 ms, 在所有 JavaScript 提交中击败了 60.00%
 * https://leetcode.cn/problems/maximum-difference-by-remapping-a-digit/
 */
const minMaxDifference = function(num) {
  const currArr = String(num).split('');
  const first = currArr[0];
  // min 最高位变成0
  const min = currArr.map((item) => {
    return item === first ? 0 : item;
  }).join('');
  // max 应该是第一个非9的数字
  let max = currArr.join('');
  const maxChange = currArr.find((item) => item != 9);
  if (maxChange || maxChange == 0) {
    max = currArr.map((item) => {
      return item === maxChange ? 9 : item;
    }).join('');
  }
  return Number(max) - Number(min);
};

// console.log(minMaxDifference(9991) === 9998);
// console.log(minMaxDifference(90) === 99);
// console.log(minMaxDifference(11891) === 99009);

export { minMaxDifference };
