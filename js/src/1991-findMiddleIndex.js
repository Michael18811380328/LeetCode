/**
 * 给你一个下标从 0 开始的整数数组 nums ，请你找到 最左边 的中间位置 middleIndex （也就是所有可能中间位置下标最小的一个）。
 * @param {number[]} nums
 * @return {number}
 */
// 先求和，然后求出左半部分和右半部分的和，一次循环实现
// 76 ms, 在所有 JavaScript 提交中击败了50.00%
var findMiddleIndex = function(nums) {
  const len = nums.length;
  if (len === 1) return 0;
  const sum = nums.reduce((a, b) => { return a + b }, 0);
  let right = sum - nums[0];
  if (right === 0) {
    return 0;
  }
  let left = 0;
  for (let i = 1; i < len; i++) {
    right = right - nums[i];
    left = left + nums[i - 1];
    if (left === right) {
      return i;
    }
  }
  return -1;
};

// console.log(findMiddleIndex([2,3,-1,8,4]) === 3);
// console.log(findMiddleIndex([1,-1,4]) === 2);
// console.log(findMiddleIndex([2,5]) === -1);
// console.log(findMiddleIndex([1]) === 0);
