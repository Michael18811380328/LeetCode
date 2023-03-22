/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 * 2570. 合并两个二维数组 - 求和法
 * https://leetcode.cn/problems/merge-two-2d-arrays-by-summing-values/
 * 简单，循环数组
 */
const mergeArrays = function(nums1, nums2) {
  const dict = {};
  nums1.forEach((item) => {
    const value = item[1];
    const key = item[0];
    if (dict[key]) {
      dict[key] = dict[key] + value;
    } else {
      dict[key] = value;
    }
  });
  nums2.forEach((item) => {
    const value = item[1];
    const key = item[0];
    if (dict[key]) {
      dict[key] = dict[key] + value;
    } else {
      dict[key] = value;
    }
  });
  const result = [];
  for (const key in dict) {
    result.push([Number(key), dict[key]]);
  }
  return result;
};

// console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]])); // [[1,6],[2,3],[3,2],[4,6]]

export { mergeArrays };
