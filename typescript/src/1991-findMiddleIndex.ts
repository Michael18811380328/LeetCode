function findMiddleIndex(nums: number[]): number {
  const len: number = nums.length;
  if (len === 1) return 0;
  const sum: number = nums.reduce((a, b) => {
    return a + b;
  }, 0);
  let right: number = sum - nums[0];
  if (right === 0) return 0;
  let left = 0;
  for (let i = 1; i < len; i++) {
    right = right - nums[i];
    left = left + nums[i - 1];
    if (left === right) {
      return i;
    }
  }
  return -1;
}

export {findMiddleIndex};
