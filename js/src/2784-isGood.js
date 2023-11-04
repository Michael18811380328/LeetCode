/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood = function(nums) {
  const len = nums.length;
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      if (nums[i] !== nums[i - 1]) {
        return false;
      }
    } else {
      if (nums[i] !== i + 1) {
        return false;
      }
    }
  }
  return true;
};

export { isGood };
