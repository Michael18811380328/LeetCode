#include <stdio.h>

int a[51][51];
int book[51][51];
int n, m, flag = 0;

struct note {
  int x;
  int y;
}s[100];

int top = 0;

void dfs(int x, int y, int front) {
  int i;
  // 判断是否到达终点：attention: m + 1
  if (x == n && y == m + 1) {
    flag = 1;
    for (i = 0; i <= top; i++) {
      printf("%d %d", s[i].x, s[i].y);
      return;
    }
  }

  if ( x < 1 || y < 1 || x > n || y > m) {
    return;
  }

  if (book[x][y] == 1) {
    return;
  } 

  book[x][y] = 1;

  top++;
  s[top].x = x;
  s[top].y = y;
  
  // 水管是直的
  if (a[x][y] >= 5 && a[x][y] <= 6) {
    // 进水口左边(只能使用5号摆放方法，插图见书上)
    if (front == 1) {
      dfs(x, y + 1, front);
    }
    // 上边
    if (front == 2) {
      dfs(x + 1, y, front);
    }
    // 右边
    if (front == 3) {
      dfs(x, y - 1, front);
    }
    // 下边
    if (front == 4) {
      dfs(x, y + 1, front);
    }
  }

  // 水管是弯的(1234)
  if (a[x][y] > 0 && a[x][y] < 5) {
    // 进水口左边(只能使用3-4号摆放方法)
    if (front == 1) {
      dfs(x + 1, y, 2);
      dfs(x - 1, y, 4);
    }
    if (front == 2) {
      dfs(x, y + 1, 1);
      dfs(x, y - 1, 3);
    }
    if (front == 3) {
      dfs(x - 1, y, 4);
      dfs(x + 1, y, 2);
    }
    if (front == 4) {
      dfs(x, y + 1, 1);
      dfs(x, y - 1, 3);
    }
  }
  // 回溯完毕，设置节点是0
  book[x][y] = 0;
  top--;
  return;
}

int main() {
  int i, j, num = 0;
  scanf("%d %d", &n, &m);
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      scanf("%d", &a[i][j]);
    }
  }
  dfs(1, 1, 1);
  if (flag == 0) {
    printf("error");
  }
  getchar();
  return 0;
}
