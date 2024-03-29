// 考点：数组的遍历和最值
// 时间复杂度：O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
// 时间复杂度不好,104 ms, 在所有 TypeScript 提交中击败了5.88%
function getMinDistance(nums: number[], target: number, start: number): number {
  const len: number = nums.length;
  let min: number = len;
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      const tmpAbs = Math.abs(i - start);
      if (tmpAbs < min) {
        min = tmpAbs;
      }
    }
  }
  return min;
}

// 改进, 80 ms, 在所有 TypeScript 提交中击败了100.00%
function getMinDistance2(
  nums: number[],
  target: number,
  start: number
): number {
  if (nums[start] === target) {
    return 0;
  }
  const arr1: number[] = nums.slice(0, start + 1).reverse();
  const arr2: number[] = nums.slice(start);
  const len: number = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if (arr1[i] === target || arr2[i] === target) {
      return i;
    }
  }
  return 0;
}

export {getMinDistance, getMinDistance2};
