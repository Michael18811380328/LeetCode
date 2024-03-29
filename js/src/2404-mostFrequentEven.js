/*
 * @lc app=leetcode.cn id=2404 lang=javascript
 * Your runtime beats 14.86 % of javascript submissions
 * [2404] 出现最频繁的偶数元素
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function(nums) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr % 2 === 0) {
      if (dict[curr]) {
        dict[curr] = dict[curr] + 1;
      } else {
        dict[curr] = 1;
      }
    }
  }
  // 如果没有偶数，直接返回-1
  if (Object.keys(dict).length === 0) {
    return -1;
  }
  // 找到出现最多的次数
  const maxTimes = Math.max(...Object.values(dict));
  // 然后找到出现最多的次数数组
  const arr = [];
  for (const key in dict) {
    const times = dict[key];
    if (times === maxTimes) {
      arr.push(parseInt(key));
    }
  }
  // 返回最小值
  return Math.min(...arr);
};

export { mostFrequentEven };
