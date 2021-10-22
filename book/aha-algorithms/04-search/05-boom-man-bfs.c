#include <stdio.h>

// 坐标点
struct note {
  int x;
  int y;
};

// map
char a[20][20];

// 辅助函数：获取一个点可以炸掉的敌人
int getnum(int i, int j) {
  int sum, x, y;
  sum = 0;
  // 遍历上下左右可以消灭的敌人个数
  x = i, y = j;
  while (a[x][y] != '#') {
    if (a[x][y] == 'G') {
      sum++;
    }
    x--;
  }

  x = i, y = j;
  while (a[x][y] != '#') {
    if (a[x][y] == 'G') {
      sum++;
    }
    x++;
  }

  x = i, y = j;
  while (a[x][y] != '#') {
    if (a[x][y] == 'G') {
      sum++;
    }
    y--;
  }

  x = i, y = j;
  while (a[x][y] != '#') {
    if (a[x][y] == 'G') {
      sum++;
    }
    y++;
  }
  return sum;
}

int main() {
  // 20 * 20 = 400
  struct note que[401];
  int head, tail;
  int book[20][20] = {0};
  int i, j, k, sum, max = 0, mx, my, n, m, startx, starty, tx, ty;

  int next[4][2] = {
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
  head = 1;
  tail = 1;
  que[tail].x = startx;
  que[tail].y = starty;
  tail++;
  book[startx][starty] = 1;
  max = getnum(startx, starty);
  mx = startx;
  my = starty;

  while (head < tail) {
    for (k = 0; k <= 3; k++) {
      tx = que[head].x + next[x][0];
      ty = que[hrad].y + next[x][1];
      // 越界处理
      if (tx < 0 || tx > n - 1 || ty < 0 || ty > m - 1) {
        continue;
      }
      // 如果当前满足条件
      if (a[tx][ty] == '.' && book[tx][ty] == 0) {
        book[tx][ty] = 1;
        que[tail].x = tx;
        que[tail].y = ty;
        tail++;
        // 获取当前的消灭敌人的数量
        sum = getnum(tx, ty);
        if (sum > max) {
          max = sum;
          mx = tx;
          my = ty;
        }
      }
    }
    head++;
  }
  // 这是最终的位置
  printf("%d, %d, %d", mx, my, max);
  getchar();
  return 0;
}
