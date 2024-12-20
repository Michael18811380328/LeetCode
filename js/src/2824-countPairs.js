/**
 * source: https://leetcode.cn/problems/count-pairs-whose-sum-is-less-than-target/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = function(nums, target) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) < target) {
        result++;
      }
    }
  }
  return result;
};

export { countPairs };
