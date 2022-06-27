/*
 * @lc app=leetcode.cn id=1222 lang=javascript
 *
 * [1222] 可以攻击国王的皇后
 */

// @lc code=start
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
// 88 ms
// , 在所有 JavaScript 提交中击败了
// 66.67%
// 的用户
const queensAttacktheKing = function(queens, king) {
  // 先遍历一次数组，把可能攻击到的位置获取出来（八个子数组）
  // 然后获取每一个数组的最小值
  const X = king[0];
  const Y = king[1];
  // 这里存放八个方向的可以攻击的位置
  const arr = [[], [], [], [], [], [], [], []];
  for (let i = 0; i < queens.length; i++) {
    const item = queens[i];
    // 处理下面几个情况
    if (item[0] === X) {
      // 在一行
      item[1] > Y ? arr[0].push(item) : arr[1].push(item);
    } else if (item[1] === Y) {
      // 在一列
      item[0] > X ? arr[2].push(item) : arr[3].push(item);
    } else if ((item[0] - X) === (item[1] - Y)) {
      // 在对角线上
      item[0] > X ? arr[4].push(item) : arr[5].push(item);
    } else if ((item[0] - X) === -(item[1] - Y)) {
      // 在对角线上
      item[0] > X ? arr[6].push(item) : arr[7].push(item);
    }
  }
  // 然后排序，获取最小的元素
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      res.push(arr[i][0]);
    } else if (arr[i].length === 0) {
      continue;
    } else {
      // 有很多，那么获取距离最短的那个点
      let currentIndex = 0;
      let currentDis = Math.abs(arr[i][0][0] - X) + Math.abs(arr[i][0][1] - Y);
      for (let j = 1; j < arr[i].length; j++) {
        if (Math.abs(arr[i][j][0] - X) + Math.abs(arr[i][j][1] - Y) < currentDis) {
          currentIndex = j;
          currentDis = Math.abs(arr[i][currentIndex][0] - X) + Math.abs(arr[i][currentIndex][1] - Y);
        }
      }
      res.push(arr[i][currentIndex]);
    }
  }
  return res;
};

// [[1,3],[0,7],[5,1],[2,5],[7,2],[1,2],[6,7],[3,3],[5,5],[1,5],[5,0],[0,4],[4,1],[1,1],[3,2],[2,3],[4,2],[1,0],[6,5],[2,7],[3,1],[4,3],[3,4]]
// [0,2]
// @lc code=end
