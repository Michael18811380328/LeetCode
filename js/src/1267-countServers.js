/**
 * @param {number[][]} grid
 * @return {number}
 * BFD 或者 DFS 都可以实现，当然也可以用其他思路
 * 先获取每行每列中是 1 的个数，构成两个字典
 * 然后遍历全部的节点，如果在字典中任意一个大于1，那么就可以通信
 * 这个可以实现，性能略有点差
 */
const countServers = function(grid) {
  const rowDict = {};
  const columnDict = {};
  // 循环全部节点，获取出现的次数，写入到对应的字典中
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        rowDict[row] = (rowDict[row] || 0) + 1;
        columnDict[col] = (columnDict[col] || 0) + 1;
      }
    }
  }
  let result = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1 && (rowDict[row] > 1 || columnDict[col] > 1)) {
        result++;
      }
    }
  }
  return result;
};

export { countServers };
