/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// Your runtime beats 13.73 % of javascript submissions
var countStudents = function(students, sandwiches) {
// 这里使用指针，比直接操作数组效果更好
// 获取当前三明治的铲毒。循环一次
// 如果用户吃掉三明治，那么重新计算长度和当前循环的次数
// 结束条件，循环的次数等于三明治的长度，那么肯定已经循环了一次，然后返回当前学生的数量
  let len = students.length;
  let times = 0;
  while (sandwiches.length > 0) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift();
      students.shift();
      len = students.length;
      times = 0;
    } else {
      times++;
      let tmp = students.shift();
      students.push(tmp);
    }
    if (times >= students.length) {
      return sandwiches.length;
    }
  }
  return sandwiches.length;
};
// @lc code=end

