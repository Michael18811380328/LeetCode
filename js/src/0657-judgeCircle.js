/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
// Your runtime beats 98.4 % of javascript submissions
const judgeCircle = function(moves) {
  if (moves.length % 2 === 1) return false;
  let x = 0;
  let y = 0;
  // 第一种思路，循环当前的字符串
  for (let i = 0; i < moves.length; i++) {
    const item = moves[i];
    switch (item) {
      case 'R':
        x++;
        break;
      case 'L':
        x--;
        break;
      case 'U':
        y++;
        break;
      case 'D':
        y--;
        break;
      default:
        break;
    }
  }
  return x === 0 && y === 0;
  // 第二种思路：字符串排序，直接计算字符串的数量
  // 这个对于长字符串效果比较好
};

// 第二种思路：字符串排序，直接计算字符串的数量
// 160 ms, 在所有 JavaScript 提交中击败了5.72%
// const judgeCircle = function(moves) {
//   if (moves.length % 2 === 1) return false;
//   moves = moves.split('');
//   moves.sort((a, b) => a > b ? 1 : -1);
//   let a = moves.indexOf('R') - moves.lastIndexOf('R');
//   let b = moves.indexOf('L') - moves.lastIndexOf('L');
//   if (a !== b) return false;
//   let c = moves.indexOf('U') - moves.lastIndexOf('U');
//   let d = moves.indexOf('D') - moves.lastIndexOf('D');
//   return c === d;
// };
// @lc code=end

export { judgeCircle };
