/*
 * @lc app=leetcode.cn id=2037 lang=javascript
 *
 * [2037] 使每位学生都有座位的最少移动次数
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
// 不管怎么移动，第一个移动到第一个座位，第二个移动到第二个座位
// 这样移动结果是最小的（不考虑每一个的移动的权重）
// Your runtime beats 81.15 % of javascript submissions
const minMovesToSeat = function(seats, students) {
  // 1、先把两个数组分别原位排序
  seats = seats.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  students = students.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  let move = 0;
  // 2、循环数组，计算每一个项的差值，并求和
  for (let i = 0; i < seats.length; i++) {
    const curr = Math.abs(seats[i] - students[i]);
    move += curr;
  }
  return move;
};
// @lc code=end
export { minMovesToSeat };
