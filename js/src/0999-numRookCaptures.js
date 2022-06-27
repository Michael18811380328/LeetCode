/*
 * @lc app=leetcode.cn id=999 lang=javascript
 * [999] 可以被一步捕获的棋子数
 * 考点：数组
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
// 1、思路1
// 80 ms, 在所有 JavaScript 提交中击败了61.84%
const numRookCaptures = function(board) {
  const len = 8;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 'R') {
        const num = getNum(board, i, j);
        return num;
      }
    }
  }
};

// 这里还能改进
const getNum = (board, x, y) => {
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
    } else if (board[i][y] === 'p') {
      res++;
      break;
    }
  }
  for (let i = y; i < 8; i++) {
    if (board[x][i] === 'B') {
      break;
    } else if (board[x][i] === 'p') {
      res++;
      break;
    }
  }
  for (let i = y; i >= 0; i--) {
    if (board[x][i] === 'B') {
      break;
    } else if (board[x][i] === 'p') {
      res++;
      break;
    }
  }
  return res;
};

// 2、思路二：优化找到车的算法
// 上面是两层循环，每一次循环还有复杂的函数判断，性能能否优化？
// 这里寻找车的过程能否优化？
// 现在是双重循环寻找
// 能否直接把数组降维，然后获取index，然后除以8，获取对应的XY
// 这样直接使用 index 即可完成，不需要双重循环
// 68 ms, 在所有 JavaScript 提交中击败了78.57%
// 子函数还能优化
const numRookCaptures = function(board) {
  const newBoard = board.flat();
  const index = newBoard.indexOf('R') + 1;
  const j = (index % 8) - 1;
  const i = (index - index % 8) / 8;
  return getNum(board, i, j);
};

// 更好的算法上，子函数还能优化，看一下怎么实现
// 如果已知了 ij 那么直接可以把四个子数组拿出来（拿出来也消耗时间）

export { numRookCaptures };
