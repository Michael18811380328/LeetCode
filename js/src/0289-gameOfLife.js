/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start

const getCell = (board, i, j) => {
  const item = board[i][j];
  let aliveCell = 0;
  // 上一行
  if (board[i - 1]) {
    if (board[i - 1][j - 1] > -1) {
      aliveCell += board[i - 1][j - 1];
    }
    if (board[i - 1][j] > -1) {
      aliveCell += board[i - 1][j];
    }
    if (board[i - 1][j + 1] > -1) {
      aliveCell += board[i - 1][j + 1];
    }
  }
  // 当前行
  if (board[i]) {
    if (board[i][j - 1] > -1) {
      aliveCell += board[i][j - 1];
    }
    if (board[i][j + 1] > -1) {
      aliveCell += board[i][j + 1];
    }
  }
  // 下一行
  if (board[i + 1]) {
    if (board[i + 1][j - 1] > -1) {
      aliveCell += board[i + 1][j - 1];
    }
    if (board[i + 1][j] > -1) {
      aliveCell += board[i + 1][j];
    }
    if (board[i + 1][j + 1] > -1) {
      aliveCell += board[i + 1][j + 1];
    }
  }
  // 判断结果
  // 如果是死细胞
  let result;
  if (item === 0) {
    result = aliveCell === 3 ? 1 : 0;
  } else {
    result = (aliveCell === 3 || aliveCell === 2) ? 1 : 0;
  }
  return result;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Your runtime beats 86.82 % of javascript submissions
const gameOfLife = function(board) {
  const len1 = board.length;
  const res = [];
  for (let i = 0; i < len1; i++) {
    const tmp = [];
    for (let j = 0; j < board[i].length; j++) {
      const newItem = getCell(board, i, j);
      tmp.push(newItem);
    }
    res.push(tmp);
  }
  // 现在返回值的res始终是正确的，但是返回值为什么不正确？？？
  // 这里使用原地算法，所以不正确啊
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = res[i][j];
    }
  }
  // return board;
};

export { gameOfLife };
