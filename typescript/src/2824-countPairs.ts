// https://leetcode.cn/problems/count-pairs-whose-sum-is-less-than-target/description/
function countPairs(nums: number[], target: number): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        result++;
      }
    }
  }
  return result;
}

export {countPairs};
