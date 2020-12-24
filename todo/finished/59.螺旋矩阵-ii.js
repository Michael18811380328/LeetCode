/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 16.54%
// 的用户
// 现在性能不太好！
// 循环内部判断方向（如果下一个位置已经有值，那么换向）
// 设置一个变量保存当前的方向（direction = 'right'）
var generateMatrix = function(n) {
  // 先生成一个完全是空的矩阵
  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      res[i][j] = true;
    }
  }
  let direction = 'right';
  let x = 0;
  let y = 0;

  // 辅助函数：计算下一个在什么位置
  var getNext = (res, x, y, direction) => {
    // console.log(x, y, direction);
    // console.log(res);
    switch (direction) {
      case 'right':
        if (res[x][y + 1] === true) {
          direction = 'right';
          x = x;
          y = y + 1;
        } else {
          direction = 'down';
          x = x + 1;
          y = y;
        }
        break;
      case 'down':
        if (res[x + 1] && res[x + 1][y] === true) {
          direction = 'down';
          x = x + 1;
          y = y;
        } else {
          direction = 'left';
          x = x;
          y = y - 1;
        }
        break;
      case 'left':
        if (res[x][y - 1] === true) {
          direction = 'left';
          x = x;
          y = y - 1;
        } else {
          direction = 'up';
          x = x - 1;
          y = y;
        }
        break;
      case 'up':
        if (res[x - 1] && res[x - 1][y] === true) {
          direction = 'up';
          x = x - 1;
          y = y;
        } else {
          direction = 'right';
          x = x;
          y = y + 1;
        }
        break;
    }
    return {x, y, direction};
  }

  // 然后循环 1 —— n * n
  let end = n ** 2;
  for (let i = 1; i <= end; i++) {
    // 需要填充的数字是i
    if (res[x][y] === true) {
      res[x][y] = i;
      // 根据方向，改变XY
      // 这里判断下一个是否有内容
      let obj = getNext(res, x, y, direction);
      x = obj.x;
      y = obj.y;
      direction = obj.direction;
    }
  }
  return res;
};
// @lc code=end

