function minimumDifference(nums: number[], k: number): number {
  if (k === 1) return 0;
  nums.sort((a, b) => (a > b ? 1 : -1));
  let start = 0;
  let end: number = start + k - 1;
  let min: number = nums[end] - nums[start];
  for (let i = 0; i < nums.length; i++) {
    start++;
    end++;
    if (nums[end] === undefined) break;
    const tmp: number = nums[end] - nums[start];
    min = tmp < min ? tmp : min;
  }
  return min;
}

export {minimumDifference};
