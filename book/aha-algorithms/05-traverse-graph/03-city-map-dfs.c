// dfs 适应于边权重不同的情况（例如不同地点的距离不同）
#include <stdio.h>

int min = 9999999;
int book[101], n, e[101][101];

void dfs(int cur, int dis) {
  int j;
  if (dis > min) {
    return;
  }
  if (cur == n) {
    if (dis < min) min = dis;
    return;
  }
  // cur != n
  for (j = 1; j <= n; j++) {
    if (e[cur][j] != 99999999 && book[j] == 0) {
      book[j] = 1;
      dfs(j, dis + e[cur][j]);
      book[j] = 0;
    }
  }
  return;
}

int main () {
  int i, j, n, m, a, b, c;
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
  for (i = 1; i <= m; i++) {
    scanf("%d %d", &a, &b);
    e[a][b] = 1;
    e[b][a] = 1;
  }
  book[1] = 1;
  dfs(1, 0);
  printf("%d", min);
  getchar();
  return 0;
}
