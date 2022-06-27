/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Your runtime beats 38.64 % of javascript submissions
const luckyNumbers = function(matrix) {
  // 循环一个矩阵，然后获取每一行的最小值
  // 然后找到索引
  // 然后遍历列，判断是否是列中的最小值
  // 如果是，放在结果数组中，并把这个列记录在一个对象中
  const len = matrix.length;
  const dict = {};
  const res = [];
  for (let i = 0; i < len; i++) {
    const min = Math.min(...matrix[i]);
    const index = matrix[i].indexOf(min);
    if (dict[index]) {
      continue;
    }
    const tmp = [];
    for (let i = 0; i < len; i++) {
      tmp.push(matrix[i][index]);
    }
    if (Math.max(...tmp) === min) {
      res.push(min);
      dict[index] = true;
    }
  }
  return res;
};
// @lc code=end

export { luckyNumbers };
