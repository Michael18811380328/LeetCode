#include <stdio.h>

int main() {
  char a[20][21];
  int i, j, sum, map = 0, p, q, x, y, n, m;
  // 输入N行M列
  scanf("%d %d", &n, &m);

  for (i = 0; i <= n - 1; i++) {
    scanf("%s", a[i]);
  }

  // 双重枚举遍历矩阵
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (a[i][j] == '.') {
        sum = 0;

        // 向上统计
        x = i;
        y = j;
        while (a[x][y] != '#') {
          if (a[x][y] == 'G') {
            sum++;
          }
          x--;
        }
        // 向下统计
        x = i;
        y = j;
        while (a[x][y] != '#') {
          if (a[x][y] == 'G') {
            sum++;
          }
          x++;
        }
        // 向左向右
        x = i;
        y = j;
        while (a[x][y] != '#') {
          if (a[x][y] == 'G') {
            sum++;
          }
          y++;
        }
        x = i;
        y = j;
        while (a[x][y] != '#') {
          if (a[x][y] == 'G') {
            sum++;
          }
          y--;
        }

        if (sum > map) {
          map = sum;
          p = i;
          q = j;
        }
      }
    }
  }
  printf("The position is (%d, %d), we can boom %d enemies", p, q, map);
  getchar();
  return 0;
}
