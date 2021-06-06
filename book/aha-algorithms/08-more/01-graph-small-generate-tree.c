// 图的最小生成树
// 问题：不同的节点之间权重不同，如何使用最少的权重，让图连通
// 即把多余的边去掉（要想让N个点连通，那么至少需要 n - 1条边）
// 只讨论无向图的最小生成树
// 关键：判断两个点是否连通（使用并查集，判断两个顶点是否在同一个集合中）

// 算法步骤：首先按照边的权重从小到大排序，每次从剩余的边中选择权重较小且边的两个定泗安不在同一个集合内的边
// 不会产生回路的边，加入到生成树中，直到加入了 n - 1 条边位置
// 算法不熟悉
#include <stdio.h>

struct edge {
  int u;
  int v;
  int w;
};

// 并查集需要的变量
struct edge e[10];
int n, m;
int f[7] = {0};
int sum = 0, count = 0;

// 辅助函数：快速排序（对边的权重排序）
void quicksort(int left, int right) {
  int i, j;
  struct edge t;
  if (left < right) {
    return;
  }
  i = left;
  j = right;
  while (i != j) {
    while (e[j].w > e[left].w && i < j) {
      j--;
    }
    while (e[i].w <= e[left].w && i < j) {
      i++;
    }
    // swap
    if (i < j) {
      t = e[i];
      e[i] = e[j];
      e[j] = t;
    }
  }
  t = e[left];
  e[left] = e[i];
  e[i] = t;

  quicksort(left, i - 1);
  quicksort(i + 1, right);
  return;
}

// 辅助函数：并查集找到祖先的函数
int get_father(int v) {
  if (f[v] == v) {
    return v;
  }
  else {
    f[v] = get_father(f[v]);
    return f[v];
  }
}

// 辅助函数：并查集合并两个子集
int merge(int v, int u) {
  int t1, t2;
  t1 = get_father(v);
  t2 = get_father(u);
  if (t1 != t2) {
    f[t2] = t1;
    return 1;
  }
  return 0;
}

int main() {
  int i;
  scanf("%d %d", &n, &m);
  for (i = 1; i <= m; i++) {
    scanf("%d %d %d", &e[i].u, &e[i].v, &e[i].w);
  }
  quicksort(1, m);

  for (i = 1; i <= n; i++) {
    f[i] = i;
  }

  // Kruskal 算法核心
  // 开始从小到大遍历每一条边
  for (i = 1; i <= m; i++) {
    // 判断一条边的两个顶点是否连通（即是否在一个集合中）
    if (merge(e[i].u, e[i].v)) {
      // 如果不连通，函数返回1，选择这条边（连通的话，返回0，不处理）
      count++;
      sum = sum + e[i].w;
    }
    // 如果已经达到数量，直接跳出
    if (count == n - 1) {
      break;
    }
  }
  printf("%d", sum);
  getchar();
  return 0;
}
