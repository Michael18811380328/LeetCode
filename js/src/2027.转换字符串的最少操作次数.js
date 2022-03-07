/*
 * @lc app=leetcode.cn id=2027 lang=javascript
 *
 * [2027] 转换字符串的最少操作次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 遍历时，在三个元素中，如果第一个是X，那么必须换成O，不管后面的是什么
// Your runtime beats 57.99 % of javascript submissions
// 贪心算法，每次遇到一个满足情况的解，就直接处理
// 注意边界条件的处理（其他的字符串匹配的方法，解不正确）
const minimumMoves = function(s) {
  let timer = 0;
  if (!s.includes('X')) {
    return 0;
  }
  const len = s.length;
  const S = s.split('');
  for (let i = 2; i < len; i++) {
    if (S[i - 2] === 'X') {
      timer++;
      S[i - 2] = 'O';
      S[i - 1] = 'O';
      S[i] = 'O';
      i += 2;
    }
  }
  // 处理最后两个数字
  if (S[len - 1] === 'X' || S[len - 2] === 'X') {
    timer++;
  }
  return timer;
};
// @lc code=end
