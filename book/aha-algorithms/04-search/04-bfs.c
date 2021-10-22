#include <stdio.h>

// 横坐标、纵坐标、父节点在队列中的编号、步数
struct node {
  int x;
  int y;
  int f;
  int s;
};

// 广度优先算法实现走迷宫（电路板布线）
int main() {
  // 地图是50*50，所以队列不会超过2500个
  struct node que[2501];
  int next[4][2] = {0};
  int book[51][51] = {0};
  next[4][2] = {
    {0, 1},
    {1, 0},
    {0, -1},
    {-1, 0},
  };
  int head, tail;
  int i, j, k, n, m, startx, starty, p, q, tx, ty, flag;
  scanf("%d %d", &n, &m);
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      scanf("%d", &a[i][j]);
    }
  }
  scanf("%d %d %d %d", &startx, &starty, &p, &q);

  // init queue
  head = 1;
  tail = 1;
  que[tail].x = startx;
  que[tail].y = starty;
  que[tail].f = 0;
  que[tail].s = 0;
  tail++;
  book[startx][starty] = 1;

  flag = 0;
  while (head < tail) {
    for (k = 0; k <= 3; k++) {
      tx = que[head].x + next[k][0];
      ty = que[head].y + next[k][1];
      if (tx < 1 || tx > n || ty < 1 || ty > m) {
        continue;
      }
      // 标记已经走过这个点
      if (a[tx][ty] == 0 && book[tx][ty] == 0) {
        book[tx][ty] = 1;
        que[tail].x = tx;
        que[tail].y = ty;
        que[tail].f = head;
        que[tail].s = que[head].s + 1;
        tail++;
      }
      // 找到目标
      if (tx == p && ty == q) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      break;
    }
    head++;
  }
  printf("%d", que[tail - 1].s);
  getchar();
  getchar();
  return 0;
}
