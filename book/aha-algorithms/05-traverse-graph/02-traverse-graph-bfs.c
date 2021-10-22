#include <stdio.h>

int main() {
  int i, j, n, m, a, b, cur;
  int book[101] = {0};
  int e[101][101];
  int que[100];

  scanf("%d %d", &n, &m);
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

  // 读入顶点之间的边
  for (i = 1; i <= m; i++) {
    scanf("%d %d", &a, &b);
    e[a][b] = 1;
    e[b][a] = 1;
    // 无向图，所以两个点都是1
  }

  // bfs 核心就是队列
  int head = 1;
  int tail = 1;

  // 开始 bfs
  que[tail] = 1;
  tail++;
  book[1] = 1;

  while (head < tail && tail <= n) {
    cur = que[head];
    for (i = 1; i <= n; i++) {
      if (e[cur][i] == 1 && book[i] == 0) {
        que[tail] = i;
        tail++;
        book[i] = 1;
      }
      if (tail > n) {
        break;
      }
    }
    // 每次遍历一个节点，队列的头指针必须增加1
    head++;
  }
  for (i = 1; i < tail; i++) {
    printf("%d", que[i]);
  }
  getchar();
  return 0;
}
