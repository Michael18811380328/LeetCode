function maximumProduct(nums: number[]): number {
  const len:number = nums.length;
  if (len === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => a - b);
  let num1:number = nums[0] * nums[1] * nums[len - 1];
  let num2:number = nums[len - 3] * nums[len - 2] * nums[len - 1];
  return Math.max(num1, num2);
};