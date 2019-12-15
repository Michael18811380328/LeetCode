// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 方法1：时间复杂度 o(nlogN) 58%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum1(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// 方法二：52%
function twoSum(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const another = target - nums[i];
    const index = nums.lastIndexOf(another);
    if (index > -1 && i !== index) {
      return [i, index];
    }
  }
}

// 方法三：使用哈希表
// 68 ms, 在所有 javascript 提交中击败了85.69%
function twoSum2(nums, target) {
  const len = nums.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const index = hash[`${item}`];
    if (index > -1) {
      return [index, i];
    }
    hash[`${target - item}`] = i;
  }
}

export { twoSum, twoSum1, twoSum2 };
