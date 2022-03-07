/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
// Your runtime beats 85.78 % of javascript submissions
const GetImportance = function(employees, id) {
  // 先把数组转换成一个哈希表(默认不会重复)
  const dict = {};
  employees.forEach((item) => {
    const key = item.id;
    const value = item.importance;
    const children = item.subordinates;
    dict[key] = { value, children };
  });
  const BFS = (key) => {
    if (!dict[key]) {
      return 0;
    }
    let value = dict[key].value;
    const children = dict[key].children;
    children.forEach((child) => {
      value += BFS(child);
    });
    return value;
  };
  // 然后按照ID深度优先遍历或者广度优先遍历即可
  return BFS(id);
};

// @lc code=end
