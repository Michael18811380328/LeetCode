#include <stdio.h>
// 案例：买书（书籍编码范围很小 ，需要去重）

// 方法1：桶排序
int main_book_sort() {
  int a[1001], n, i, t;
  // init book
  for (i = 1; i < 1000; i++) {
    a[i] = 0;
  }
  scanf("%d", &n);
  // 出现一次，标记为1（顺便去重）
  for (i = 1; i <= n; i++) {
    scanf("%d", &t);
    a[t] = 1;
  }
  for (i = 1; i <= 1000; i++) {
    if (a[i] == 1) {
      print("%d", i);
    }
  }
  getchar();
  getchar();
  return 0;
}

// 方法2：冒泡排序+去重
int main_bubble_sort() {
  int a[101], n, i, j, t;
  scanf("%d", &n);
  for (i = 1; i <= n; i++) {
    scanf("%d", &a[i]);
  }
  // bubble sort or quick sort
  for (i = 1; i < n - 1; i++) {
    for (j = 1; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
  printf("%d", a[1]);
  // 如果是重复数字不输出
  for (i = 2; i <= n; i++) {
    if (a[i] != a[i - 1]) {
      printf("%d", a[i]);
    }
  }
  getchar();
  return 0;
}

int main() {
  main_book_sort();
  main_bubble_sort();
}
