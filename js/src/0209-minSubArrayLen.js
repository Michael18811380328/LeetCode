/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
  const len = nums.length;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  while (sum < s) {
    right++;
    sum += nums[right];
    // 全部的和小于s, 那么直接返回0
    if (right === len) {
      return 0;
    }
  }
  let minLen = right - left + 1;
  // 开始遍历每一种情况
  while (left <= right && right < len) {
    if (sum > s) {
      sum -= nums[left];
      left++;
    } else {
      right++;
      if (right === len) {
        break;
      }
      sum += nums[right];
    }
    if (sum >= s) {
      const currentLen = right - left + 1;
      if (minLen > currentLen) {
        minLen = currentLen;
      }
    }
  }
  return minLen;
};

export { minSubArrayLen };
