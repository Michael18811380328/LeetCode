// 并查集
// 一个数组中，存在多个不同的树，需要计算树的个数
// 关键：合并子集（从左合并）
#include <stdio.h>

int f[1001] = {0},n, m, k, sum = 0;

void init() {
  int i;
  for (i = 1; i <= n; i++) {
    f[i] = i;
  }
  return;
}

int get_father(int v) {
  if (f[v] == v) {
    return v;
  }
  else {
    // 计算一个节点的相同值的节点时，同时把全部的节点链上的单元格修改了
    f[v] = get_father(f[v]);
    return f[v];
  }
}

void merge(int v, int u) {
  int t1, t2;
  t1 = get_father(v);
  t2 = get_father(u);
  if (t1 != t2) {
    f[t2] = t1; // 靠左原则，把右面的节点的值改成坐标的节点的值
  }
  return;
}

int main() {
  int i, x, y;
  scanf("%d %d", &n, &m);

  init();

  for (i = 1; i <= m; i++) {
    scanf("%d %d", &x, &y);
    merge(x, y);
  }

  for (i = 1; i <= n; i++) {
    if (f[i] == i) {
      sum++;
    }
  }

  printf("%d", sum);
  getchar();
  return 0;
}
