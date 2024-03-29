/**
 * @param {number} n
 * @return {number[][]}
 */
// [59] 螺旋矩阵 II
// 96 ms , 在所有 JavaScript 提交中击败了16.54%
// 现在性能不好！
// 循环内部判断方向（如果下一个位置已经有值，那么换向）
// 设置一个变量保存当前的方向（direction = 'right'）
const generateMatrix = function(n) {
  // 先生成一个完全是空的矩阵
  const res = new Array(n);
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
  const getNext = (res, x, y, direction) => {
    switch (direction) {
      case 'right':
        if (res[x][y + 1] === true) {
          direction = 'right';
          // x = x;
          y = y + 1;
        } else {
          direction = 'down';
          x = x + 1;
          // y = y;
        }
        break;
      case 'down':
        if (res[x + 1] && res[x + 1][y] === true) {
          direction = 'down';
          x = x + 1;
          // y = y;
        } else {
          direction = 'left';
          // x = x;
          y = y - 1;
        }
        break;
      case 'left':
        if (res[x][y - 1] === true) {
          direction = 'left';
          // x = x;
          y = y - 1;
        } else {
          direction = 'up';
          x = x - 1;
          // y = y;
        }
        break;
      case 'up':
        if (res[x - 1] && res[x - 1][y] === true) {
          direction = 'up';
          x = x - 1;
          // y = y;
        } else {
          direction = 'right';
          // x = x;
          y = y + 1;
        }
        break;
    }
    return { x, y, direction };
  };

  // 然后循环 1 —— n * n
  const end = n ** 2;
  for (let i = 1; i <= end; i++) {
    // 需要填充的数字是i
    if (res[x][y] === true) {
      res[x][y] = i;
      // 根据方向，改变XY, 这里判断下一个是否有内容
      const obj = getNext(res, x, y, direction);
      x = obj.x;
      y = obj.y;
      direction = obj.direction;
    }
  }
  return res;
};

export { generateMatrix };
