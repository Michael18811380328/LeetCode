/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 */
// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let len = seats.length;
  if (len === 2) {
      return 1;
  }
  // 如果在两边，直接计算(这个情况需要处理)
  // 如果在中间（奇数加一）然后除以2，计算
  let max = 1;
  let start = seats[0] === 0 ? 0 : null;
  let end = null;
  let interval;
  for (let i = 1; i < len; i++) {
    if (seats[i - 1] === 1 && seats[i] === 0) {
      start = i;
    }
    else if ((seats[i - 1] === 0 && seats[i] === 1) || (i === len - 1 && seats[i] === 0)) {
      if (i === len - 1 && seats[i] === 0) {
        end = i;
      } else {
        end = i - 1;
      }
      if (start === 0 || end === seats.length - 1) {
        interval = (end - start + 1);
      } else {
        interval = Math.ceil((end - start + 1) / 2);
      }
      max = interval > max ? interval : max;
      start = i;
      end = null;
    }
  }
  return max;
};
// @lc code=end

