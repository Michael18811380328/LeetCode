/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 61.84%
// 的用户
var numRookCaptures = function(board) {
  const len = 8;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 'R') {
        let num = getNum(board, i, j);
        return num;
      }
    }
  }
};

var getNum = (board, x, y) => {
  let res = 0;
  for (let i = x; i < 8; i++) {
    if (board[i][y] === 'B') {
      break;
    } else if (board[i][y] === 'p') {
      res++;
      break;
    }
  }
  for (let i = x; i >= 0; i--) {
    if (board[i][y] === 'B') {
      break;
    }
    else if (board[i][y] === 'p') {
      res++;
      break;
    }
  }
  for (let i = y; i < 8; i++) {
    if (board[x][i] === 'B') {
      break;
    }
    else if (board[x][i] === 'p') {
      res++;
      break;
    }
  }
  for (let i = y; i >= 0; i--) {
    if (board[x][i] === 'B') {
      break;
    }
    else if (board[x][i] === 'p') {
      res++;
      break;
    }
  }
  return res;
}
// @lc code=end

