/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// 第一种思路是 DFS
// 数组的长度是20，DFS 需要计算 100w 这个量级可以接受，但是性能不好
// Your runtime beats 40.04 % of javascript submissions
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
  let total = 0;
  const len = nums.length;
  const check = (preSum, index) => {
    const current = nums[index];
    // 已经遍历了全部的数组
    if (index === len - 1) {
      if (preSum + current === target) total++;
      if (preSum - current === target) total++;
      return;
    }
    // 没有遍历全部数组，那么 DFS 继续执行
    check(preSum + current, index + 1);
    check(preSum - current, index + 1);
  };
  check(0, 0);
  return total;
};

// console.log(findTargetSumWays([1,1,1,1,1], 3) === 3);
// console.log(findTargetSumWays([1], 1) === 1);
// console.log(findTargetSumWays([0], 0) === 2);
// console.log(findTargetSumWays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 6) === 18564);
// @lc code=end
