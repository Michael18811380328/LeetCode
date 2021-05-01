/**
 * knapsack https://zh.wikipedia.org/wiki/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98
 * 背包问题: 动态规划基础
 **/
function knapsack(capacity, size, value, n) {
  let k = [];
  // 初始化一个矩阵
  for (let i = 0; i <= n; i++) {
    k[i] = [];
  }
  for (let j = 0; j <= n; j++) {
    for (let w = 0; w <= capacity; w++) {
      if (j === 0 || w === 0) {
        k[j][w] = 0;
      }
      else if (size[j - 1] <= w) {
        k[j][w] = Math.max(value[j - 1] + k[j - 1][w - size], k[j - 1][w]);
      }
      else {
        k[j][w] = k[j - 1][w];
      }
    }
  }
  return k[n][capacity];
}
