function search(nums: number[], target: number): number {
  const len: number = nums.length;
  if (len === 0 || nums[0] > target || nums[len - 1] < target) {
    return -1;
  }
  let start = 0;
  let end: number = len - 1;
  if (nums[start] === target) {
    return 0;
  }
  if (nums[end] === target) {
    return len - 1;
  }
  let middle: number = Math.ceil((start + end) / 2);
  while (start < end - 1) {
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    } else if (nums[middle] < target) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
  return -1;
}

export {search};
