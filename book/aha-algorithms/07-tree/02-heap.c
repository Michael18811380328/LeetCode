#include <stdio.h>

int h[101]; // heap
int n; // 堆中元素的数量

void swap(int x, int y) {
  int tmp;
  tmp = h[x];
  h[x] = h[y];
  h[y] = tmp;
  return;
}

// 向下调整函数(从节点i向下调整)
void siftdown (int i) {
  int t, flag = 0;
  while (i * 2 <= n && flag == 0) {
    if (h[i] < h[i * 2]) {
      t = i * 2;
    }
    else {
      t = i;
    }
    if (i * 2 + 1 <= n) {
      if (h[t] < h[i * 2 + 1]) {
        t = i * 2 + 1;
      }
    }
    if (t != i) {
      swap(i, t);
      i = t;
    } else {
      flag = 1;
    }
  }
  return;
}

// create heap
void create() {
  int i;
  for (i = n / 2; i >= 1; i--) {
    siftdown(i);
  }
  return;
}

// sort
void heapsort() {
  while (n > 1) {
    swap(1, n);
    n--;
    siftdown(1);
  }
  return;
}

int main() {
  int i, num;
  scanf("%d", &num);
  for (i = 0; i <= num; i++) {
    scanf("%d", &h[i]);
  }
  n = num;

  create();

  heapsort();

  for (i = 0; i <= num; i++) {
    printf("%d", h[i]);
  }
  getchar();
  return 0;
}
