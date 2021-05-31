#include <stdio.h>

struct note {
  int x;
  int y;
};

int bfs_main() {
  struct note que[2501];
  int head, tail;
  int a[50][51];
  int book[50][51] = 0;
  int i, j, k, sum, max = 0, mx, my, n, m, startx, starty, tx, ty;
  
  int next[2][4] = {
    {0, 1},
    {1, 0},
    {0, -1},
    {-1, 0},
  };

  scanf("%d %d %d %d", &n, &m, &startx, &starty);
  for (i = 0; i <= n - 1; i++) {
    scanf("%d", a[i]);
  }

  // init queue
  head = 1；
  tail = 1;
  que[tail].x = startx;
  que[tail].y = starty;
  tail++;
  book[startx][starty] = 1;
  sum = 1;

  while (head < tail) {
    for (k = 0; k <= 3; k++) {
      tx = que[head].x + next[k][0];
      ty = que[head].y + next[k][1];
      if (tx < 1 || tx > n || ty < 1 || ty > m) {
        continue;
      }
      if (a[tx][ty] > 0 && book[tx][ty] == 0) {
        sum++;
        book[tx][ty] = 1;
        que[tail].x = tx;
        que[tail].y = ty;
        tail++;
      }
    }
    head++;
  }
  printf("%d", sum);
  getchar();
  return 0;
}

// dfs: 染色法
int a[51][51], book[51][51], n, m, sum;

void dfs(int x, int y, int color) {
  int next[2][4] = {
    {0, 1},
    {1, 0},
    {0, -1},
    {-1, 0},
  };
  int k, tx, ty;
  // 遍历过的点进行着色（-1）
  a[x][y] = color;
  for (k = 0; k <= 3; k++) {
    tx = x + next[k][0];
    ty = y + next[k][1];
    if (tx < 0 || tx > n || ty < 0 || ty > m) {
      continue;
    }
    if (a[tx][ty] > 0 && book[tx][ty] == 0) {
      sum++;
      book[tx][ty] = 1;
      dfs(tx, ty, color);
    }
  }
  return;
}

int dfs_main() {
  int i, j, startx, starty;
  scanf("%d %d %d %d", &n, &m, &startx, &starty);
  for (i = 0; i <= n - 1; i++) {
    scanf("%d", a[i]);
  }
  book[startx][starty] = 1;
  sum = 1;

  dfs(startx, starty, -1);

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      // %3d 表示C语言中场宽
      printf("%3d", a[i][j]);
    }
    printf("\n");
  }
  getchar();
  return;
}

int main() {
  bfs_main();
  dfs_main();
}
