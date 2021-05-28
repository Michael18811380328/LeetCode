#include <stdio.h>

// use two array to generate linked list
int main() {
  int data[101], right[101];
  int i, n, t, len;

  // init data array
  scanf("%d", &n);
  for (i = 1; i <= n; i++) {
    scanf("%d", &data[i]);
  }
  len = n;

  // init right pointer array
  for (i = 1; i <= n; i++) {
    if (i != n) {
      right[i] = i + 1;
    }
    else {
      right[i] = 0;
    }
  }

  // 直接把新加入的数组，放在数据数组的最后一位
  len++;
  scanf("%d", &data[len]);

  // 然后改变指针数组
  t = 1;
  while (t != 0) {
    if (data[right[t]] > data[len]) {
      right[len] = right[t];
      right[t] = len;
      break;
    }
    t = right[t];
  } 
  // print linked list
  t = 1;
  while (t != 0) {
    printf("%d", data[t]);
    t = right[t];
  }
  getchar();
  return 0;
}
