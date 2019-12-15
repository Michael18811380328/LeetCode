// 215-findKthLargest.js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路一：直接排序，然后返回排序数组的对应下标的元素
// 这样需要对数组排序，性能不好
// 88ms, 36MB, 76%
function findKthLargest(nums, k) {
  const res = nums.sort((a, b) => b - a);
  return res[k - 1];
}

export { findKthLargest };
