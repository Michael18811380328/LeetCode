/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路1：直接计算出左侧数组和右侧数组，然后求结果数组
 * https://leetcode.cn/problems/left-and-right-sum-differences/
 */
const leftRightDifference = function(nums) {
  const len = nums.length;
  if (len === 1) return [0];
  const leftSum = [];
  const rightSum = [];
  let tmp = 0;
  for (let i = 0; i < len; i++) {
    leftSum[i] = tmp;
    tmp += nums[i];
  }
  tmp = 0;
  for (let i = len - 1; i >= 0; i--) {
    rightSum[i] = tmp;
    tmp += nums[i];
  }
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return res;
};

// console.log(leftRightDifference([10,4,8,3])) // [15,1,11,22]
// console.log(leftRightDifference([1])) // [0]

export { leftRightDifference };
