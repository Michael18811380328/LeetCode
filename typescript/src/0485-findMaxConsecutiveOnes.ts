function findMaxConsecutiveOnes(nums: number[]): number {
  const len: number = nums.length;
  if (len === 0 || nums.indexOf(1) === -1) {
    return 0;
  }
  let max = 1;
  let tmp = 0;
  let i = 0;
  for (; i < len; i++) {
    if (nums[i] == 1) {
      tmp++;
      max = tmp > max ? tmp : max;
    } else {
      tmp = 0;
    }
  }
  return max;
}

export {findMaxConsecutiveOnes};
