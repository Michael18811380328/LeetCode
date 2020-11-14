/*
 * @lc app=leetcode.cn id=1450 lang=javascript
 *
 * [1450] 在既定时间做作业的学生人数
 */
// Your runtime beats 94.6 % of javascript submissions
// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  const len = startTime.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      res++;
    }
  }
  return res;
};
// @lc code=end

