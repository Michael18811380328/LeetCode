/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */
// 判断获胜的辅助函数，比较简单，只需要判断三个情况
// 如何判断平局或者继续玩
// 如果没有下完，但是已经是平局了，这个怎么计算？（实验一下）
// [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2]]
// 计算结果：这个按照 pending 结束
// 推广：五子棋的算法

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */

// 辅助函数：检查三个点是否在直线上(检查通过)
const isThreeLine = function(p1, p2, p3) {
  // 如果横坐标相等，那么在直线上
  if (p1[0] == p2[0] && p1[0] == p3[0]) {
    return true;
  }
  // 如果纵坐标相等，那么也在直线上
  if (p1[1] == p2[1] && p1[1] == p3[1]) {
    return true;
  }
  // 如果斜率相等，那么也在直线上（除数不是0的情况）
  // k1 = (y2 - y1) / (x2 - x1)
  // k2 = (y3 - y1) / (x3 - x1)
  if (p2[0] - p1[0] !== 0 && p3[0] - p1[0] !== 0) {
    const k1 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    const k2 = (p3[1] - p1[1]) / (p3[0] - p1[0]);
    if (k1 === k2) {
      return true;
    }
  }
  // 其他都不是直线上
  return false;
};

// 检查一个人是否是真的
const checkList = function(list) {
  const len = list.length;
  if (len === 3) {
    return isThreeLine(list[0], list[1], list[2]);
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isThreeLine(list[i], list[j], list[k])) {
          return true;
        }
      }
    }
  }
  return false;
};

const tictactoe = function(moves) {
  const draw = 'Draw';
  const pen = 'Pending';
  const len = moves.length;
  // 如果长度小于5，那么肯定没有人获胜，是 pending 状态
  if (len < 5) {
    return pen;
  }
  const l1 = [];
  const l2 = [];
  // 思路：循环数组，每次都判断当前的情况是否某一个人获胜
  for (let i = 0; i < len; i++) {
    i % 2 === 0 ? l1.push(moves[i]) : l2.push(moves[i]);
    // （是否有三个点在一条直线上）
    // 如果是四个或者五个点，那么就随机选择其中的三个点，这个复杂度可以接受
    // 这一步可以优化，能否使用已有的数据？
    if (i % 2 === 0) {
      if (l1.length > 2 && checkList(l1)) {
        return 'A';
      }
    } else if (l2.length > 2 && checkList(l2)) {
      return 'B';
    }
  }
  // 如果下棋结束，长度等于9，那么就是平局；否则继续下
  return len === 9 ? draw : pen;
};

// [[1,0],[0,1],[0,0],[2,0],[1,1],[2,1],[1,2]]

// @lc code=end
