function searchInsert(nums: number[], target: number): number {
  const index: number = nums.indexOf(target);
  if (index > -1) {
    return index;
  }
  if (target < nums[0]) {
    return 0;
  }
  const len: number = nums.length - 1;
  if (target > nums[len]) {
    return len + 1;
  }
  let min = 0;
  let max: number = len;
  while (max > min) {
    const middle: number = Math.ceil((max + min) / 2);
    if (nums[middle] > target) {
      if (middle === max) {
        return middle;
      }
      max = middle;
    } else {
      min = middle;
    }
  }
  return 0;
}

export {searchInsert};
