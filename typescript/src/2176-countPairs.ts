function countPairs(nums: number[], k: number): number {
  const len:number = nums.length;
  if (Array.from(new Set(nums)).length === len) {
    return 0;
  }
  let res:number = 0;
  for (let i:number = 0; i < len; i++) {
    for (let j:number = i + 1; j < len; j++) {
      if (nums[i] === nums[j] && i * j % k === 0) {
        res++;
      }
    }
  }
  return res;
};