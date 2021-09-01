// intersect
// 给定两个数组，编写一个函数来计算它们的交集。
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
// 72 ms, 在所有 javascript 提交中击败了66.28%
function intersect(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const item = nums1[i];
    const index = nums2.indexOf(item);
    if (index > -1) {
      result.push(item);
      nums2.splice(index, 1);
    }
  }
  return result;
}

export { intersect };
