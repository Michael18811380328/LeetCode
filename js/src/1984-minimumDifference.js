// 思路：先把 nums 排序，然后按照滑动窗口的算法，依次入栈出栈，然后计算最小值
// 或者双指针即可，不需要出栈入栈
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  if (k === 1) return 0;
  nums.sort((a, b) => a > b ? 1 : -1);
  let start = 0;
  let end = start + k - 1;
  let min = nums[end] - nums[start];
  for (let i = 0; i < nums.length; i++) {
    start++;
    end++;
    if (nums[end] === undefined) break;
    const tmp = nums[end] - nums[start];
    min = tmp < min ? tmp : min;
  }
  return min;
};

export { minimumDifference };
