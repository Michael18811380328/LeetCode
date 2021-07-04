/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
//  Your runtime beats 5.66 % of javascript submissions
// 当前性能太差了
// 主要是后半部分性能很差
var orangesRotting = function(grid) {
  // 出现的次数放在字典
  let dict = {};
  dict[0] = 0;
  dict[1] = 0;
  dict[2] = 0;
  // 坏了的位置
  let reapPos = [];

  // 先遍历一次，把出现的次数放在字典中
  const len1 = grid.length;
  const len2 = grid[0].length;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let curr = grid[i][j];
      if (curr === 0) {
        dict[0] = dict[0] + 1;
      }
      else if (curr === 1) {
        dict[1] = dict[1] + 1;
      }
      else if (curr === 2) {
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
  let mark = (x, y, time) => {
    // console.log(x, y, time);
    if (grid[x] && grid[x][y] === 1) {
      grid[x][y] = 2;
      reapPos.unshift([x, y, time]);
      // 然后新鲜的橘子数量减1
      dict[1] = dict[1] - 1;
      max = time > max ? time : max;
    }
  }

  
  // BFS 遍历图节点
  let check = (pos) => {
    let x = pos[0];
    let y = pos[1];
    let time = pos[2];
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
    let pos = reapPos.pop();
    check(pos);
  }

  // console.log(grid);
  // console.log(dict);
  // console.log(reapPos);

  // 遍历结束，如果还有新鲜的橘子，那就是没有遍历到的区域, 返回 -1 
  if (dict[1] > 0) {
    return -1;
  }

  return max;
  // 因为这个图比较小，最差的情况下，循环20次，即可获取到结果
  // 这个算法复杂度可以接受
};
// @lc code=end

