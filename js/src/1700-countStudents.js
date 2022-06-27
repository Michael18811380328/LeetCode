/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// Your runtime beats 13.73 % of javascript submissions
const countStudents = function(students, sandwiches) {
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
      const tmp = students.shift();
      students.push(tmp);
    }
    if (times >= students.length) {
      return sandwiches.length;
    }
  }
  return sandwiches.length;
};
// @lc code=end

// 改进1（去掉len变量）看来主要和网速有关
// Your runtime beats 85.63 % of javascript submissions
const countStudents2 = function(students, sandwiches) {
  let times = 0;
  while (sandwiches.length > 0) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift();
      students.shift();
      times = 0;
    } else {
      times++;
      const tmp = students.shift();
      students.push(tmp);
    }
    if (times >= students.length) {
      return sandwiches.length;
    }
  }
  return sandwiches.length;
};

// 另一个思路
// 直接计数行不行？现在一个一个算，太麻烦
// 直接计算全部学生的数量（0-1）然后计算三明治的数量
// 如果相等，那么肯定能全部吃了
// 如果不等，那么求出最后一个出现的，然后此时的长度就是没有吃饭的长度
// 分析一下这样的复杂度
// 64 ms, 在所有 JavaScript 提交中击败了95.00%
const countStudents3 = function(students, sandwiches) {
  const len = students.length;
  let times1 = 0;
  let times0 = 0;
  students.forEach((item) => {
    item === 1 ? times1++ : times0++;
  });
  // 处理特殊情况
  if (times1 === 0) {
    const index = sandwiches.indexOf(1);
    if (index === -1) return 0;
    return len - index;
  }
  if (times0 === 0) {
    const index = sandwiches.indexOf(0);
    if (index === -1) return 0;
    return len - index;
  }
  for (let i = 0; i < sandwiches.length; i++) {
    const item = sandwiches[i];
    if (item === 1) {
      times1--;
    }
    if (item === 0) {
      times0--;
    }
    if (times1 === -1 || times0 === -1) {
      return len - i;
    }
  }
  return 0;
};

export { countStudents, countStudents2, countStudents3 };
