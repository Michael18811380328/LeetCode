/**
 * 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param nums 
 * @returns sorted Squares
 * 156 ms, 在所有 TypeScript 提交中击败了31.25%
 */
function sortedSquares(nums: number[]): number[] {
  const len: number = nums.length;
  let left: number = 0; 
  let right: number = len - 1;
  let res: number[] = [];
  while (left <= right) {
    let current: number;
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      current = nums[right];
      right--;
    } else {
      current = nums[left];
      left++;
    }
    res.unshift(current * current);
  }
  return res;
};
