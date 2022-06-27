/*
 * @lc app=leetcode.cn id=2176 lang=javascript
 *
 * [2176] 统计数组中相等且可以被整除的数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 难度简单，数组遍历和比较
 * 64 ms, 在所有 JavaScript 提交中击败了79.65%
 */
const countPairs = function(nums, k) {
  const len = nums.length;
  // 先判断一下是否有重复值，如果没有重复值，直接返回空
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
// 更好的优化方案，是循环一次，然后使用字典计数即可
// 这个实现也不难，有时间再说
// @lc code=end

export { countPairs };
