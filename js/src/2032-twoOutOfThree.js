/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
// [2032] 至少在两个数组中出现的值
// 思路：求三个数组中两两的交集，然后求并集
// 问题：是否考虑重复情况（求并集是否去重）
// Your runtime beats 80.13 % of javascript submissions
const twoOutOfThree = function(nums1, nums2, nums3) {
  // 1 辅助函数，求两个数组的并集
  // 1.1 先把一个数组使用对象记录
  // 1.2 然后遍历另一个数组，求交集
  const interact = (arr1, arr2) => {
    const dict = {};
    arr1.forEach((item) => {
      dict[item] = true;
    });
    return arr2.filter((item) => {
      return dict[item] === true;
    });
  };
  // 2 把三个交集求出来，然后拼接成新的数组，并去重
  const inter1 = interact(nums1, nums2);
  const inter2 = interact(nums1, nums3);
  const inter3 = interact(nums3, nums2);
  const result = [].concat(inter1, inter2, inter3);
  return [...new Set(result)];
};

export { twoOutOfThree };
