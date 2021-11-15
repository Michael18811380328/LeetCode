function twoSum(nums: number[], target: number): number[] {
  const len:number = nums.length;
  const hash = {};
  for (let i:number = 0; i < len; i++) {
    const item:number = nums[i];
    const index:number = hash[`${item}`];
    if (index > -1) {
      return [index, i];
    }
    hash[`${target - item}`] = i;
  }
  return [];
};
