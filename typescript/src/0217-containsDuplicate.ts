function containsDuplicate(nums: number[]): boolean {
  const map: object = {};
  const len: number = nums.length;
  for (let i = 0; i < len; i++) {
    const item: number = nums[i];
    if (!map[item]) {
      map[item] = true;
    } else {
      return true;
    }
  }
  return false;
}

export {containsDuplicate};
