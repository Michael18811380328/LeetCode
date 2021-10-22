// bfs 适应于边权重相等的情况（例如A到B点坐飞机转机最少的情况）
#include <stdio.h>

struct node {
  int x; // 城市编号
  int s; // 转机次数
};

int main () {
  struct node que[2501];
  int e[51][51] = {0};
  int book[51] = {0};
  int head, tail;
  int i, j, n, m, a, b, cur, start, end, flag = 0;
  scanf("%d %d %d %d", &n, &m, &start, &end);

  // init matrix
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      // 主对角线上的元素（一个节点到自己，是0）
      if (i == j) {
        e[i][j] = 0;
      }
      else {
        e[i][j] = 99999999; // 假设为正无穷
      }
    }
  }
  
  // init 不同城市的航班（无向图）
  for (i = 1; i <= m; i++) {
    scanf("%d %d", &a, &b);
    e[a][b] = 1;
    e[b][a] = 1;
  }

  head = 1;
  tail = 1;

  que[tail].x = start;
  que[tail].s = 0;
  tail++;
  book[start] = 1;

  while (head < tail) {
    cur = que[head].x;
    for (j = 1; j <= n; j++) {
      if (e[cur][j] != 99999999 && book[j] == 0) {
        que[tail].x = j;
        que[tail].s = que[head].s + 1;
        tail++;
        book[j] = 1;
      }
      if (que[tail - 1].x == end) {
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
  return 0;
}
