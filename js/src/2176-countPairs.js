/**
 * [2176] 统计数组中相等且可以被整除的数对
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 难度简单，数组遍历和比较
 * 64 ms, 在所有 JavaScript 提交中击败了79.65%
 */
const countPairs = function(nums, k) {
  const len = nums.length;
  // 先判断一下是否有重复值，如果没有重复值（数对），直接返回空
  if (Array.from(new Set(nums)).length === len) {
    return 0;
  }
  // 两次循环，获取重复的并且满足的元素
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j] && ((i * j) % k) === 0) {
        res++;
      }
    }
  }
  return res;
};

export { countPairs };
