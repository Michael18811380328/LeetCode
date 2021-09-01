// 88. 合并两个有序数组
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 76 ms , 在所有 javascript 提交中击败了 51.84%
// 多次打错的原因：特殊值0的处理，数组中是否有负数或者0等的处理

function mergeTwoArray(nums1, m, nums2, n) {
  if (n === 0) return;
  if (m === 0) {
    // PS： 能否不需要splice，直接返回nums2?
    nums1.splice(0, n, ...nums2);
    return nums1;
  }
  nums1.splice(m, n);
  let index = 0;
  for (let i = 0; i < n; i++) {
    while (nums2[i] > nums1[index]) {
      index++;
    }
    nums1.splice(index, 0, nums2[i]);
  }
  return nums1;
}

export { mergeTwoArray };
