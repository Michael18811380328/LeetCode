// 41-firstMissingPositive.js
// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

// 思路一：先过滤一下，把负数和0排除，然后在排序。排序结束获取最小的正整数
// 68 ms, 在所有 javascript 提交中击败了76.60%
function firstMissingPositive(nums) {
  nums = nums.filter(item => {
    return item > 0
  });
  nums = nums.sort((a, b) => {
    return a - b;
  });
  if (nums[0] !== 1) {
    return 1;
  }
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    }
  }
  return nums[len - 1] + 1;
}

export { firstMissingPositive }; 