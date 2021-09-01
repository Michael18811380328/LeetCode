/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * Do not return anything, modify nums in-place instead.
 * 108 ms, 在所有 TypeScript 提交中击败了87.08%
 */
function rotate(nums: number[], k: number): void {
  const len:number = nums.length;
  if (len === 1 || k === 0) {
    return;
  }
  const times:number = k % len;
  let tailArray: number[] = nums.splice(-times, times);
  nums.unshift(...tailArray);
};
