/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function(grid) {
  // 循环每一行，如果第一个不是1，那么执行变换
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = grid[i][j] === 0 ? 1 : 0;
      }
    }
  }
  // 循环每一列，看1的个数和0的个数比较一下，如果1的个数小于0的个数，那么就转换
  for (let i = 0; i < grid[0].length; i++) {
    let tmp = 0;
    for (let j = 0; j < grid.length; j++) {
      tmp += grid[j][i];
    }
    if (tmp < grid.length / 2) {
      for (let j = 0; j < grid.length; j++) {
        grid[j][i] = grid[j][i] === 0 ? 1 : 0;
      }
    }
  }
  // 计算结果，提取字符串并转换成二进制求和
  return grid.map((item) => item.join('')).reduce((a, b) => {
    return a + parseInt(b, 2);
  }, 0);
};

// 官方的解答是 位运算+贪心算法
// https://leetcode.cn/problems/score-after-flipping-matrix/solutions/511825/fan-zhuan-ju-zhen-hou-de-de-fen-by-leetc-cxma/
//   var matrixScore = function(grid) {
//     const m = grid.length, n = grid[0].length;
//     let ret = m * (1 << (n - 1));
//     for (let j = 1; j < n; j++) {
//         let nOnes = 0;
//         for (let i = 0; i < m; i++) {
//             if (grid[i][0] === 1) {
//                 nOnes += grid[i][j];
//             } else {
//                 nOnes += (1 - grid[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - grid[i][j]
//             }
//         }
//         const k = Math.max(nOnes, m - nOnes);
//         ret += k * (1 << (n - j - 1));
//     }
//     return ret;
// };

export { matrixScore };
