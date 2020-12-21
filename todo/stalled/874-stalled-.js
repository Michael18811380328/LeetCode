/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
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
var robotSim = function(commands, obstacles) {
  // commadns 中转向函数的处理
  // 初始点[0, 0]
  // 对应 +x +y -x -y 四种情况
  // 

  // obstacles 障碍物函数的处理（难点）

  // 每走到新的点，那么需要获取这个点的坐标，然后计算最大值
};


