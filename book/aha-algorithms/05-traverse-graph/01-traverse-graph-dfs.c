#include <stdio.h>

// 使用图的邻接矩阵存储法（e[101][101]）
int book[101], sum, n, e[101][101];

// DFS 每一个节点
// cur 是当前的顶点编号
void dfs (int cur) {
  int i;
  printf("%d", cur);
  // 每次访问一个节点，那么sum加一，如果已经访问了全部节点，那么直接返回
  sum++;
  if (sum == n) {
    return;
  }
  for (i = 1; i <= n; i++) {
    // 一个点到另一个点有边，并且没有访问过，那么dfs
    if (e[cur][i] == 1 && book[i] == 0) {
      book[i] = 1;
      dfs(i);
    }
  }
  return;
}

int main() {
  int i, j, m, a, b;
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
  // 开始遍历
  book[1] = 1;
  dfs(1);
  getchar();
  return 0;
}
