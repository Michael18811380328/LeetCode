#include <stdio.h>

int a[10], book[10], total = 0;

void dfs(int step) {
  int i;
  if (step == 10) {
    if (a[1] * 100 + a[2] * 10 + a[3] + a[4] * 100 + a[5] * 10 + a[6] === a[7] * 100 + a[8] * 10 + a[9]) {
      total++;
      // 满足条件的数组a，可以打印出来
    }
    return;
  }
  for (i = 1; i < 10; i++) {
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
  dfs(1);
  // 会重复出现两次，所以这里除以2
  printf("total = %d", total / 2);
  return 0;
}
