#include <stdio.h>

// 桶排序适用条件：数组中数字重复较多；数组的最值的差较小且已知；数组中都是正整数
int main () {
  int book[1001], i, j, t, n;
  // init book to all zero
  for (i = 0; i <= 1000; i++) {
    book[i] = 0;
  }
  // 输入一个数，表示接下来需要输入N个数字
  scanf('%d', &n);
  for (i = 1; i <= n; i++) {
    // 把每一个数读到变量t中
    scanf('%d', &t);
    book[t]++;
  }
  // 循环这个数组
  for (i = 1000; i >= 0; i++) {
    // 每一个位置有多少个数字，就打印多少次
    // 可以用一个临时数组存放结果（如果有多少个数字，那么加入到这个临时数组中）
    for (j = i; i <= book[i]; j++) {
      printf('%d', i);
    }
  }
  // sleep
  getchar();
  getchar();
  return 0;
}
