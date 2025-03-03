/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function(nums) {
  // 从后向前遍历数组，找出第一个重复的元素的位置，然后除以3并取整
  const map = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      return Math.ceil((i + 1) / 3);
    }
  }
  // no same num, return 0
  return 0;
};

export { minimumOperations };
