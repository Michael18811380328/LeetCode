/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
//  140 ms, 在所有 JavaScript 提交中击败了17.20%
const updateBoard = function(board, click) {
  // 考点：广度优先遍历；或者深度优先遍历
  // 点到雷了
  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X';
    return board;
  }

  const isMine = (x, y) => {
    if (!board[x] || !board[x][y]) {
      return 0;
    }
    return board[x][y] === 'M' ? 1 : 0;
  };

  // 辅助函数
  const checkPoint = (x, y) => {
    // 首先判断这个点是否存在
    // 如果已经有数值，直接返回
    if (!board[x] || !board[x][y] || board[x][y] !== 'E') {
      return;
    }
    // 看周边有几个雷，那么显示多少数字
    const sum = isMine(x, y + 1) + isMine(x, y - 1)
    + isMine(x + 1, y + 1) + isMine(x + 1, y) + isMine(x + 1, y - 1)
    + isMine(x - 1, y + 1) + isMine(x - 1, y) + isMine(x - 1, y - 1);

    if (sum === 0) {
      // 如果周边完全没有雷，那么直接递归周边的八个点即可
      board[x][y] = 'B';
      // 递归剩下的点
      checkPoint(x, y + 1);
      checkPoint(x, y - 1);
      checkPoint(x + 1, y + 1);
      checkPoint(x + 1, y);
      checkPoint(x + 1, y - 1);
      checkPoint(x - 1, y + 1);
      checkPoint(x - 1, y);
      checkPoint(x - 1, y - 1);
    } else {
      // 如果周边有雷，直接标记数量
      board[x][y] = `${sum}`;
    }
  };
  checkPoint(click[0], click[1]);
  return board;
};
// @lc code=end
