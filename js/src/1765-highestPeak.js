/*
 * @lc app=leetcode.cn id=1765 lang=javascript
 * [1765] 地图中的最高点_图的广度优先遍历
 */
// @lc code=start
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
// 思路1：bfs：由于相邻的两个格子必须高度差为1，而水域必须高度为0，所以，直接以水域为bfs源点，进行bfs把整个区域的值给更新就行了
// 当矩阵特别大，会超时(1000 * 219的矩阵，数组 push 按照20万操作，肯定会爆)
const highestPeak1 = function(isWater) {
  const rowLen = isWater.length;
  const colLen = isWater[0].length;
  // 初始化结果矩阵（空的二维数组）
  const result = [];
  for (let i = 0; i < rowLen; i++) {
    result[i] = [];
  }
  // 记录标记的点
  const visitedDict = {};
  const pushedDict = {};
  const queue = [];
  // 先找到值是1的点，设置结果数组是0
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (isWater[i][j] === 1) {
        visitedDict[`${i}-${j}`] = true;
        pushedDict[`${i}-${j}`] = true;
        result[i][j] = 0;
        queue.push([i, j, 0]);
      }
    }
  }
  // 辅助函数：标记一个点
  function markNode(i, j, deep) {
    visitedDict[`${i}-${j}`] = true;
    result[i][j] = deep;
    // 如果已经有了，这里就不需要重复放入，现在这里存在重复放入节点的情况
    if (!pushedDict[`${i}-${j}`]) {
      queue.push([i, j, deep]);
      pushedDict[`${i}-${j}`] = true;
    }
  }

  // 辅助函数
  function checkNode(node) {
    if (!node) return;
    const [i, j, deep] = node;
    // 处理当前节点周边四个点的值，如果点存在，并且没有被遍历过，那么遍历这个点
    if (j + 1 >= 0 && j + 1 < colLen && !visitedDict[`${i}-${j + 1}`]) {
      markNode(i, j + 1, deep + 1);
    }
    if (j - 1 >= 0 && j - 1 < colLen && !visitedDict[`${i}-${j - 1}`]) {
      markNode(i, j - 1, deep + 1);
    }
    if (i + 1 >= 0 && i + 1 < rowLen && !visitedDict[`${i + 1}-${j}`]) {
      markNode(i + 1, j, deep + 1);
    }
    if (i - 1 >= 0 && i - 1 < rowLen && !visitedDict[`${i - 1}-${j}`]) {
      markNode(i - 1, j, deep + 1);
    }
  }
  // BFS
  while (queue.length > 0) {
    // 数据量大，频繁进出数组很耗时
    const curr = queue.shift();
    // 然后从水域点开始遍历，判断周围的四个点，依次加一
    checkNode(curr);
  }
  return result;
};

// 思路2：整体替换 queue，避免高频 push pop 操作
// 能通过，2108 ms, 在所有 JavaScript 提交中击败了 5.66%，可以通过，性能还不行
const highestPeak2 = function(isWater) {
  const rowLen = isWater.length;
  const colLen = isWater[0].length;
  // 初始化结果矩阵（空的二维数组）
  const result = [];
  for (let i = 0; i < rowLen; i++) {
    result[i] = [];
  }
  // 记录标记的点
  const visitedDict = {};
  let queue = [];
  // 先找到值是1的点，设置结果数组是0
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (isWater[i][j] === 1) {
        visitedDict[`${i}-${j}`] = true;
        result[i][j] = 0;
        queue.push([i, j, 0]);
      }
    }
  }
  function markNode(i, j, deep, newQueue) {
    visitedDict[`${i}-${j}`] = true;
    result[i][j] = deep;
    newQueue.push([i, j, deep]);
  }
  // BFS
  while (queue.length > 0) {
    const newQueue = [];
    for (let k = 0; k < queue.length; k++) {
      const [i, j, deep] = queue[k];
      // 处理当前节点周边四个点的值，如果点存在，并且没有被遍历过，那么遍历这个点
      if (j + 1 >= 0 && j + 1 < colLen && !visitedDict[`${i}-${j + 1}`]) {
        markNode(i, j + 1, deep + 1, newQueue);
      }
      if (j - 1 >= 0 && j - 1 < colLen && !visitedDict[`${i}-${j - 1}`]) {
        markNode(i, j - 1, deep + 1, newQueue);
      }
      if (i + 1 >= 0 && i + 1 < rowLen && !visitedDict[`${i + 1}-${j}`]) {
        markNode(i + 1, j, deep + 1, newQueue);
      }
      if (i - 1 >= 0 && i - 1 < rowLen && !visitedDict[`${i - 1}-${j}`]) {
        markNode(i - 1, j, deep + 1, newQueue);
      }
    }
    // 避免队列频繁操作 pop push，使用队列直接替换
    queue = newQueue;
  }
  return result;
};

// console.log(highestPeak([[0,1],[0,0]])) // [[1,0],[2,1]]
// console.log(highestPeak([[0,0,1],[1,0,0],[0,0,0]])) // [[1,1,0],[0,1,1],[1,2,2]]
// console.log(highestPeak([[0,1],[0,0],[0,1],[0,0],[0,1],[0,0],[0,1],[0,0],[0,0]]))
// [[1,0],[2,1],[1,0],[2,1],[1,0],[2,1],[1,0],[2,1],[3,2]]
// console.log(highestPeak([[1,1,1,1,0],[1,1,1,1,1],[1,1,1,0,1],[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1]]))
// [[0,0,0,0,1],[0,0,0,0,0],[0,0,0,1,0],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]]

// 思路3：上面代码继续优化，关键优化是 isWater[newX][newY] > cost，时间复杂度就好很多了；也避免了函数多次调用
// 原地算法也减少了内存使用
// 384 ms, 在所有 JavaScript 提交中击败了86.79%
// 链接：https://leetcode.cn/problems/map-of-highest-peak/solution/pythonjavajavascriptgo-duo-yuan-bfs-by-h-uqwm/
const highestPeak3 = function(isWater) {
  const DIRS = [[1, 0], [0, 1], [0, -1], [-1, 0]];
  const m = isWater.length;
  const n = isWater[0].length;
  const MAX = m * n * 10;
  let queue = [];
  let cost = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == 1) {
        isWater[i][j] = 0;
        queue.push([i, j]);
      } else {
        // 先把其他的陆地都设置成最大值
        isWater[i][j] = MAX;
      }
    }
  }
  while (queue.length > 0) {
    const newQueue = [];
    cost++;
    for (const point of queue) {
      for (const dir of DIRS) {
        const newX = point[0] + dir[0];
        const newY = point[1] + dir[1];
        // 如果新的值 cost 小于原来的陆地的高度，那么执行替换操作
        if (newX >= 0 && newY >= 0 && newX < m && newY < n && cost < isWater[newX][newY]) {
          isWater[newX][newY] = cost;
          newQueue.push([newX, newY]);
        }
      }
    }
    queue = newQueue;
  }
  return isWater;
};

// 思路4：dp思路：由于dp都依赖上一次更新的结果，而我们一般就是从左到右的遍历更新，而这题是和四个位置相关，所以，我们分为：从上到下从左到右更新，可以把依赖上和左的答案给更新，从下到上，从右到左更新，可以把依赖下和右的结果给更新完。
// 本题使用两次动态规划来解决，其实我们很容易想到的是四个方向的动态规范解法：
// dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i+1][j], dp[i][j+1]) + 1,
// isWater[i][j] = 1
// 其实使用双向dp就可以解决，我们每次dp解决两个方向的最小值，即(左上、右下)或(右上、左下)
// 使用两次动态规划其实也是计算了四个方向的最小值，所以使用两次既可！
// 链接：https://leetcode.cn/problems/map-of-highest-peak/solution/dong-tai-gui-hua-ji-bai-100yong-hu-by-un-mb30/

// var highestPeak = function(isWater) {
//   let m = isWater.length, n = isWater[0].length;
//   // 初始化dp
//   const dp = Array.from(Array(m), () => Array(n).fill(0));
//   // 定一个最大值
//   const max = m * n;
//   // 先去使用左上到右下的DP
//   for(let i = 0; i < m; i++){
//       for(let j = 0; j < n; j++){
//           if(isWater[i][j] === 1){
//               continue;
//           }
//           // 如果值为0的话，则先去计算它到左上的最小值
//           let min = max;
//           // 计算上位置的最小值
//           if (i > 0) {
//               min = Math.min(min, dp[i - 1][j] + 1);
//           }
//           // 计算左侧位置的最小值
//           if (j > 0) {
//               min = Math.min(min, dp[i][j - 1] + 1);
//           }
//           dp[i][j] = min;
//       }
//   }
//   // 从右下到左上的DP
//   for (let i = m - 1; i >= 0; i--) {
//       for (let j = n - 1; j >= 0; j--) {
//           if (i < m - 1) {
//               dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
//           }
//           if (j < n - 1) {
//               dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
//           }
//       }
//   }
//   return dp;
// };

export { highestPeak1, highestPeak2, highestPeak3 };
