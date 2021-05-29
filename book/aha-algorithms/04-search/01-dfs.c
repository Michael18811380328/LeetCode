#include <stdio.h>

int a[10], book[10], n;
// 注：C语言全局变量默认的值是0， 这里的 Book 默认都是0

// 扑克牌排列组合
void dfs(int step) {
  int i;
  // 如果已经到n+1，那么满足条件，打印并返回
  if (step == n + 1) {
    for (i = 1; i <= n; i++) {
      printf("%d", a[i]);
    }
    printf("\n");
    return;
  }
  // 开始深度优先遍历
  for  (i = 1; i <= n; i++) {
    if (book[i] == 0) {
      a[step] = i;
      book[i] = 1;
      dfs(step + 1);
      book[i] = 0;
    }
  }
  return;
}

int main() {
  scanf("%d", &n);
  dfs(1);
  getchar();
  return 0;
}
