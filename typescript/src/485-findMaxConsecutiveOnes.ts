function findMaxConsecutiveOnes(nums: number[]): number {
  const len:number = nums.length;
  if (len === 0 || nums.indexOf(1) === -1) {
    return 0;
  }
  let max:number = 1;
  let tmp:number = 0;
  let i:number = 0;
  for (; i < len; i++) {
    if (nums[i] == 1) {
      tmp++;
      max = tmp > max ? tmp : max;
    } else {
      tmp = 0;
    }
  }
  return max;
};

export { findMaxConsecutiveOnes };
