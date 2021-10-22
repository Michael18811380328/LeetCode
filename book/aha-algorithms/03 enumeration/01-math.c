#include <stdio.h>

// 奥数题目(xxx + xxx = xxx)使用 1-9 填充这个等式
int main() {
  int a[10], book[10];
  int total = 10;
  int i, sum;
  // 使用 a[1] - a[9] 表示九个数字
  for (a[1] = 1; a[1] <= 9; a[1]++) {
    for (a[2] = 1; a[2] <= 9; a[2]++) {
      for (a[3] = 1; a[3] <= 9; a[3]++) {
        for (a[4] = 1; a[4] <= 9; a[4]++) {
          for (a[5] = 1; a[5] <= 9; a[5]++) {
            for (a[6] = 1; a[6] <= 9; a[6]++) {
              for (a[7] = 1; a[7] <= 9; a[7]++) {
                for (a[8] = 1; a[8] <= 9; a[8]++) {
                  for (a[9] = 1; a[9] <= 9; a[9]++) {
                    // 初始化 book 数组
                    for (i = 1; i <= 9; i++) {
                      book[i] = 0;
                    }
                    for (i = 1; i <= 9; i++) {
                      book[a[i]] = 1;
                    }
                    // 计算出现的个数
                    sum = 0;
                    for (i = 1; i <= 9; i++) {
                      sum += book[i];
                    }
                    if (sum == 9 && a[1] * 100 + a[2] * 10 + a[3] + a[4] * 100 + a[5] * 10 + a[6] == a[7] * 100 + a[8] * 10 + a[9]) {
                      total++;
                      printf("%s", "ok");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // A + B = C 可能 A 和 B 换一个位置，所以总和除以2
  printf("total is %d", total / 2);
  getchar();
  return 0;
}
