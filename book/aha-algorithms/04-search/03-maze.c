#include <stdio.h>

// 迷宫（二维数组）
// 需要判断当前位置是否已经走过(走过就标记一下)
int n, m, p, q, min = 99999999;
int a[51][51], book[51][51];

void dfs(int x, int y, int step) {
  // 这里使用矩阵存储下一步的四个方向(上下左右)
  int next[4][2] = {
    {0, 1},
    {1, 0},
    {0, -1},
    {-1, 0}
  };
  int tx, ty, k;
  // 判断是否到达
  if (x == p && y == q) {
    if (step < min) {
      min = step;
    }
    return;
  }
  // 枚举四种走法
  for (k = 0; k < 4; k++) {
    tx = x + next[k][0];
    ty = y + next[k][1];
    // 判断是否越界
    if (tx < 1 || tx > n || ty < 1 || ty > m) {
      continue;
    }
    // 当前的点没有走过，当前不是障碍物，那么 dfs
    if (a[tx][ty] == 0 && book[tx][ty] == 0) {
      book[tx][ty] = 1;
      dfs(tx, ty, step + 1);
      book[tx][ty] = 0;
    }
  }
  return;
}

int main() {
  int i, j, startx, starty;
  scanf("%d %d", &n, &m);
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      scanf("%d", &a[i][j]);
    }
  }
  scanf("%d %d %d %d", &startx, &starty, &p, &q);

  book[startx][starty] = 1;
  dfs(startx, starty, 0);
  printf("%d", min);
  getchar();
  getchar();
  return 0;
}
