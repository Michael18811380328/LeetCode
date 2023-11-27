/*
 * @lc app=leetcode.cn id=874 lang=javascript
 * [874] 模拟行走机器人 哈希表 中等难度，自己没有想出来
 */
//
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
// 难点：判断障碍物
// 从一个点到另一个点上，是否有障碍物？
// 可能有10000个障碍物，不能使用数组遍历，只能使用对象存储？
// 障碍物可以放在两个对象中？
// 这个不能循环判断，这是个问题
// 然后10000个操作，只能遍历一次，不能双重遍历
// 链接：https://leetcode.cn/problems/walking-robot-simulation/solutions/2343695/mo-ni-xing-zou-ji-qi-ren-by-leetcode-sol-41b8/
const robotSim = function(commands, obstacles) {
  // 机器人转向和向前移动的操作，表示为方向数组
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  // 当前的坐标点
  let px = 0;
  let py = 0;

  // 初始方向是北方
  let d = 1;

  // 计算障碍物哈希表
  const set = new Set();
  // 题目给定的范围是 0 <= obstacles.length <= 104，这个 60001 需要注意
  // 60001 obstacle的坐标范围。如果10001, (1, 0)和(0, 10001)就会撞到一起。
  for (const obstacle of obstacles) {
    set.add(obstacle[0] * 60001 + obstacle[1]);
  }

  let res = 0;
  for (const c of commands) {
    // 当前指令 -1 表示右转90度，重新计算方向
    if (c === -1) {
      d += 1;
      d %= 4;
    }
    // 当前指令-2 表示左转90度，重新计算方向
    else if (c === -2) {
      d += 3;
      d %= 4;
    }
    // 当前指令大于0，那么就向前走（需要判断方向）
    else {
      // 循环每一步往前走
      for (let i = 0; i < c; i++) {
        // 如果当前是障碍物，停止
        if (set.has((px + dirs[d][0]) * 60001 + py + dirs[d][1])) {
          break;
        }
        // 根据当前的方向，计算下一个点的位置
        px += dirs[d][0];
        py += dirs[d][1];
        // 重新计算距离原点的位置，然后计算最大值
        const distance = px * px + py * py;
        res = Math.max(res, distance);
      }
    }
  }
  return res;
};

export { robotSim };
