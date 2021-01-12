function rob(nums: number[]): number {
  const len:number = nums.length;
  if (len === 0) {
    return 0;
  }
  else if (len === 1) {
    return nums[0];
  }
  else if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let res:number[] = [];
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);
  for (let i:number = 2; i < len; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1]);
  }
  return res[res.length - 1];
};