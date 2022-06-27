/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// Your runtime beats 48.72 % of javascript submissions
const projectionArea = function(grid) {
  // 根据投影分析知道
  // 结果 = 全部数据中不是0的个数（Z轴）投影
  // + 矩阵行和列的分别的最大值即可
  // 遍历数组即可
  let X = 0;
  let Y = 0;
  let Z = 0;
  const len = grid.length;
  const dict = [];
  for (let i = 0; i < len; i++) {
    const range = grid[i];
    // 找到当前行的最大值
    const max = Math.max(...range);
    X += max;
    for (let j = 0; j < len; j++) {
      const item = range[j];
      if (item > 0) {
        Z++;
      }
      dict[j] = item > (dict[j] || 0) ? item : dict[j];
    }
  }
  // dict 求和
  // console.log(dict);
  Y = dict.reduce((item, sum) => { return item + sum; }, 0);
  // console.log(X, Y, Z)
  return (X + Y + Z);
};
// @lc code=end

export { projectionArea };
