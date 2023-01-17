/**
 * [2099] 找到和最大的长度为 K 的子序列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Your runtime beats 92.95 % of javascript submissions
const maxSubsequence = function(nums, k) {
  // 1 先获取最大的前K个元素
  const arr = [...nums].sort((a, b) => {
    return a > b ? -1 : 1;
  }).slice(0, k);
  // 2 然后转换成字典
  const dict = {};
  arr.forEach((item) => {
    if (!dict[item]) {
      dict[item] = 1;
    } else {
      dict[item] = dict[item] + 1;
    }
  });
  // 3 然后遍历一次原数组，把最大的这些元素按照顺序输出
  const result = [];
  nums.forEach((num) => {
    if (dict[num]) {
      result.push(num);
      dict[num] = dict[num] - 1;
    }
  });
  return result;
};

// console.log(maxSubsequence([2,1,3,3], 2))
// console.log(maxSubsequence([-1,-2,3,4], 3))
// console.log(maxSubsequence([3,4,3,3], 2))

export { maxSubsequence };
