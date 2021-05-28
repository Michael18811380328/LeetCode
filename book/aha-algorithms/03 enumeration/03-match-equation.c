#include <stdio.h>

// 辅助函数：判断一个数字需要多少火柴
int fun(int x) {
  int num = 0;
  // 这里存储0-9对应的火柴数量
  int f[10] = {6, 2, 5, 5, 4, 5, 6, 3, 7, 6};
  while (x / 10 != 0) {
    num += f[x % 10];
    x = x / 10;
  }
  num += f[x];
  return num;
}

int main() {
  int a, b, c, m, sum = 0;
  scanf("%d", &m);
  // 输入M根火柴
  for (a = 0; a <= 1111; a++) {
    for (b = 0; b <= 1111; b++) {
      c = a + b;
      // 加号和等于号消耗4根火柴
      if (fun(a) + fun(b) + fun(c) + 4 == m) {
        printf("%d + %d = %d", a, b, c);
        sum++;
      }
    }
  }
  // 一共有 sum 个等式
  printf("%d", sum);
  getchar();
  return 0;
}
