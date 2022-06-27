/*
 * @lc app=leetcode.cn id=1909 lang=javascript
 *
 * [1909] 删除一个元素使数组严格递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 辅助函数：判断一个函数是否是单调递增函数
// 这个如何记忆一个片段是单调递增的？现在是 N 平方的性能
const isIncrease = function(list) {
  const len = list.length;
  if (len === 0 || len === 1) return true;
  for (let i = 1; i < len; i++) {
    if (list[i] <= list[i - 1]) {
      return false;
    }
  }
  return true;
};

// Your runtime beats 64.17 % of javascript submissions
const canBeIncreasing = function(nums) {
  const len = nums.length;
  if (len === 2) {
    return true;
  }
  if (isIncrease(nums)) {
    return true;
  }
  for (let i = 0; i < len; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    if ((left.length === 0 || right.length === 0 || left[left.length - 1] < right[0]) && isIncrease(left) && isIncrease(right)) {
      return true;
    }
  }
  return false;
};

// [100,21,100]

// @lc code=end
export { canBeIncreasing };
