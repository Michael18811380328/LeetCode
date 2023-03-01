// https://leetcode.cn/problems/left-and-right-sum-differences/
function leftRightDifference(nums: number[]): number[] {
  const len: number = nums.length;
  if (len === 1) return [0];
  let leftSum: number[] = [];
  let rightSum: number[] = [];
  let tmp: number = 0;
  for (let i = 0; i < len; i++) {
    leftSum[i] = tmp;
    tmp += nums[i];
  }
  tmp = 0;
  for (let i = len - 1; i >= 0; i--) {
    rightSum[i] = tmp;
    tmp += nums[i];
  }
  let res: number[] = [];
  for (let i = 0; i < len; i++) {
    res.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return res;
};