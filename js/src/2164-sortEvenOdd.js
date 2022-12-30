/**
 * [2164] 对奇偶下标分别排序
 * @param {number[]} nums
 * @return {number[]}
 * 简单：把数组按照下标拆成两个，分别排序，然后再拼接起来
 * 72 ms, 在所有 JavaScript 提交中击败了71.24%
 */
const sortEvenOdd = function(nums) {
  if (nums.length <= 2) {
    return nums;
  }
  const arr1 = [];
  const arr2 = [];
  nums.forEach((item, index) => {
    if (index % 2 === 0) {
      arr1.push(item);
    } else {
      arr2.push(item);
    }
  });
  arr1.sort((a, b) => a > b ? 1 : -1);
  arr2.sort((a, b) => a > b ? -1 : 1);
  const result = [];
  const len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  if (arr1.length > arr2.length) {
    result.push(arr1[arr1.length - 1]);
  }
  return result;
};

export { sortEvenOdd };
