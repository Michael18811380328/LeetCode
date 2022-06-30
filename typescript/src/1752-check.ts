function check(nums: number[]): boolean {
  const len: number = nums.length;
  // 长度小于3的数组肯定可以旋转成排序好的数组
  if (len < 3) {
    return true;
  }
  let add = 0;
  if (nums[len - 1] > nums[0]) {
    add++;
  }
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      add++;
    }
    if (add > 1) {
      return false;
    }
  }
  return true;
}

export {check};
