/*
 * @lc app=leetcode.cn id=2160 lang=javascript
 *
 * [2160] 拆分数位后四位数字的最小和
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 * Your runtime beats 9.98 % of javascript submissions
 */
const minimumSum = function(num) {
  const arr = num.toString().split('').map((i) => Number(i)).sort((a, b) => a > b ? 1 : -1);
  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
};
// 现在这个方法，使用了数组排序和数字字符串转换
// 实际上，获取四个数中前两个最大的数字，然后获取后两个数字，加起来即可

// @lc code=end

export { minimumSum };
