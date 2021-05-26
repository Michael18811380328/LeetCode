#include <stdio.h> 

int main() {
  int q[102] = {0, 6, 3, 1, 7, 5, 8, 9, 2, 4};
  int head, tail;
  head = 1;
  // queue 中有9个值，所以尾指针指向10
  tail = 10;
  while (head < tail) {
    // 删除奇数元素
    printf("%d", q[head]);
    head++;
    // 把偶数元素移动到尾部
    q[tail] = q[head];
    tail++;
    head++;
  }
  getchar();
  getchar();
  return 0;
}
