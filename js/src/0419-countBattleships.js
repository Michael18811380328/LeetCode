/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
// Your runtime beats 81.32 % of javascript submissions
const changeBoard = (board, i, j) => {
  board[i][j] = '.';
  if (board[i][j + 1] === 'X') {
    while (board[i][j + 1] === 'X') {
      board[i][j + 1] = '.';
      j = j + 1;
    }
  } else {
    while (board[i + 1] && board[i + 1][j] === 'X') {
      board[i + 1][j] = '.';
      i = i + 1;
    }
  }
};

const countBattleships = function(board) {
  // 循环甲板上的元素
  // 如果是空的，继续循环
  // 如果不是空的，监测相邻的右边和下边，然后把联系的占有的情况改成空
  let res = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item === 'X') {
        res++;
        changeBoard(board, i, j);
        // console.log(board);
      }
    }
  }
  return res;
};

// [["X",".","X"],["X",".","X"]]
// @lc code=end

export { countBattleships };
