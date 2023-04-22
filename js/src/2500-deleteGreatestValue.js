/**
 * @param {number[][]} grid
 * @return {number}
 */
const deleteGreatestValue = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  // 处理特殊情况
  if (height === 1 && width === 1) {
    return grid[0][0];
  }
  if (height === 1) {
    return grid[0].reduce((a, b) => a + b, 0);
  }
  // 每一行排序
  grid = grid.map((list) => {
    return list.sort((a, b) => a > b ? 1 : -1);
  });
  let res = 0;
  // 循环每一列，求出每一列的最大值
  for (let i = 0; i < width; i++) {
    const tmp = [];
    for (let j = 0; j < height; j++) {
      tmp.push(grid[j][i]);
    }
    res = res + Math.max(...tmp);
  }
  return res;
};

// console.log(deleteGreatestValue([[1,2,4],[3,3,1]])) // 8
// console.log(deleteGreatestValue([[10]])) // 10
// console.log(deleteGreatestValue([[50,72,65,6,81,92,18,51,10,50,32,64,32,14,54,16,45,64,27,45,15,94,40,51,7,4,17,81,69,96,79,88,11,60,91,21,82,56,30,38,19]])) // 1937

export { deleteGreatestValue };
