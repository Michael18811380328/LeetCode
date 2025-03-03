/**
 * @param {number[]} nums
 * @return {number}
 */
const countSubarrays = function(nums) {
  let times = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (2 * (nums[i] + nums[i + 2]) === nums[i + 1]) {
      times++;
    }
  }
  return times;
};

export { countSubarrays };
