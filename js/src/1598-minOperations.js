/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
// Your runtime beats 63.72 % of javascript submissions
const minOperations = function(logs) {
  let current = 0;
  const len = logs.length;
  for (let i = 0; i < len; i++) {
    const item = logs[i];
    if (item === './') {
      continue;
    } else if (item === '../') {
      if (current > 0) current--;
    } else {
      current++;
    }
  }
  return current;
};
// @lc code=end

export { minOperations };
