/*
 * @lc app=leetcode.cn id=994 lang=javascript
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// Your runtime beats 5.66 % of javascript submissions
// 当前性能太差了主要是后半部分性能很差
const orangesRotting = function(grid) {
  // 出现的次数放在字典(todo：这里可以定义三个变量，减少内存使用)
  const dict = {};
  dict[0] = 0;
  dict[1] = 0;
  dict[2] = 0;
  // 坏了的位置
  const reapPos = [];

  // 先遍历一次，把出现的次数放在字典中
  const len1 = grid.length;
  const len2 = grid[0].length;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      const curr = grid[i][j];
      if (curr === 0) {
        dict[0] = dict[0] + 1;
      } else if (curr === 1) {
        dict[1] = dict[1] + 1;
      } else if (curr === 2) {
        dict[2] = dict[2] + 1;
        // 然后把坏的果子的坐标获取到
        // 0 表示初始值（分钟）
        reapPos.push([i, j, 0]);
      }
    }
  }
  // 如果没有新鲜的橘子，直接返回0
  if (dict[1] === 0) {
    return 0;
  }
  // 如果有孤立的新鲜的橙子，直接返回1（不考虑两个连起来的新鲜的橘子）
  // 这个做了，还有孤立的橙子，没有必要

  // 辅助函数：标记点位
  const mark = (x, y, time) => {
    if (grid[x] && grid[x][y] === 1) {
      grid[x][y] = 2;
      reapPos.unshift([x, y, time]);
      // 然后新鲜的橘子数量减1
      dict[1] = dict[1] - 1;
      max = time > max ? time : max;
    }
  };

  // BFS 遍历图节点
  const check = (pos) => {
    const x = pos[0];
    const y = pos[1];
    const time = pos[2];
    if (grid[x] && grid[x][y] === 2) {
      // 先把当前标记为 false
      grid[x][y] = false;
      // 然后标记四个方向
      mark(x, y + 1, time + 1);
      mark(x, y - 1, time + 1);
      mark(x + 1, y, time + 1);
      mark(x - 1, y, time + 1);
    }
  };

  let max = 0;
  // 遍历烂橘子
  // 二维数组中应该存储一个对象？遍历过的点，直接标记一下即可
  while (reapPos.length > 0) {
    const pos = reapPos.pop();
    check(pos);
  }
  // 遍历结束，如果还有新鲜的橘子，那就是没有遍历到的区域, 返回 -1
  // 这一部分能否提前做？先判断是否有孤立的点，然后内部的橘子都是好的
  // 这样就可以直接终止循环（BFS）
  if (dict[1] > 0) {
    return -1;
  }
  return max;
  // 因为这个图比较小，最差的情况下，循环20次，即可获取到结果
  // 这个算法复杂度可以接受
};

// 改进1版本
// Your runtime beats 33.93 % of javascript submissions
const orangesRotting1 = function(grid) {
  // 出现的次数
  let b = 0;
  // 坏了的位置
  const reapPos = [];
  // 先遍历一次，把出现的次数放在字典中
  const len1 = grid.length;
  const len2 = grid[0].length;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      const curr = grid[i][j];
      if (curr === 1) {
        b = b + 1;
      } else if (curr === 2) {
        // 然后把坏的果子的坐标获取到 0 表示初始值（分钟）
        reapPos.push([i, j, 0]);
      }
    }
  }
  if (b === 0) {
    return 0;
  }
  const mark = (x, y, time) => {
    if (grid[x] && grid[x][y] === 1) {
      grid[x][y] = 2;
      reapPos.unshift([x, y, time]);
      // 然后新鲜的橘子数量减1
      b = b - 1;
      max = time > max ? time : max;
    }
  };

  // BFS 遍历图节点
  const check = (pos) => {
    const x = pos[0];
    const y = pos[1];
    const time = pos[2];
    if (grid[x] && grid[x][y] === 2) {
      grid[x][y] = false;
      mark(x, y + 1, time + 1);
      mark(x, y - 1, time + 1);
      mark(x + 1, y, time + 1);
      mark(x - 1, y, time + 1);
    }
  };

  let max = 0;
  while (reapPos.length > 0) {
    const pos = reapPos.pop();
    check(pos);
  }
  if (b > 0) {
    return -1;
  }
  return max;
};

export { orangesRotting };
