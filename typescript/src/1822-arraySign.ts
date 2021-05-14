// 84 ms, 在所有 TypeScript 提交中击败了86.84%
function arraySign(nums: number[]): number {
  let minusTimes:number = 0;
  let len:number = nums.length;
  for (let i:number = 0; i < len; i++) {
    const item:number = nums[i];
    if (item === 0) {
      return 0;
    }
    if (item < 0) {
      minusTimes++;
    }
  }
  return minusTimes % 2 === 0 ? 1 : -1;
};