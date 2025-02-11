function knapsack(W, wt, val, n) {
  const K = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 0; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
          if (i === 0 || w === 0) {
              K[i][w] = 0;
          } else if (wt[i - 1] <= w) {
              K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
          } else {
              K[i][w] = K[i - 1][w];
          }
      }
  }
  return K[n][W];
}

// 示例
const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;
const result = knapsack(W, wt, val, n);
console.log("最大价值为:", result);
