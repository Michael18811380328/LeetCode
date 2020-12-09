function searchRange(nums: number[], target: number): number[] {
  const len:number = nums.length;
  let start:number = -1;
  let end:number = -1;
  for (let i:number = 0; i <= len; i++) {
    if (start === -1 && nums[i] === target && (nums[i - 1] === undefined || nums[i - 1] !== target)) {
      start = i;
    }
    if (nums[i - 1] === target && (nums[i] === undefined || nums[i] !== target)) {
      end = i - 1;
    }
    if (start !== -1 && end !== -1) {
      break;
    }
  }
  let res: number[] = [start, end];
  return res;
};