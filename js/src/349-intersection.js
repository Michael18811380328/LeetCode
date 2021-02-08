// 349
// 给定两个数组，编写一个函数来计算它们的交集。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 首先把每个数组去重，获取去重后的数组
// 循环一个数组，判断另一个数组中是否包含这个节点，然后把重复的结果放在result数组中
// 已经战胜 56.82 % 的 javascript
function intersection(nums1, nums2) {
  const arr1 = Array.from(new Set(nums1));
  const arr2 = Array.from(new Set(nums2));
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (arr2.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

export { intersection };
