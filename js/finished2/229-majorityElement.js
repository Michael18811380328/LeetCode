// 229 计算数组中超过三分之一长度的众数
// 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 76 ms, 在所有 javascript 提交中击败了53.95%
// 思路一：使用一个哈希表记录出现的次数（这样空间复杂度增加）
function majorityElement(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) {
    return nums;
  }
  if (len === 2) {
    return Array.from(new Set(nums)); // 这里返回去重后的数组
  }
  const timer = len % 3 === 0 ? len / 3 : Math.floor(len / 3);
  const hash = {};
  const result = [];
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (hash[item] && hash[item] !== true) {
      hash[item]++;
      if (hash[item] > timer) {
        result.push(item);
        hash[item] = true;
      }
    } else {
      hash[item] = 1;
    }
  }
  return Array.from(new Set(result));
}
// 思路二，遍历一次数组，在当前的数组中直接存储出现的次数
// 注意：数组中的0，数组的长度是0123的情况
// 大于等于 Math.ceil(n / 3)

export { majorityElement };
