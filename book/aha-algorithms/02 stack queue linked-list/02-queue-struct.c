#include <stdio.h>

struct queue {
  int data[100];
  int head;
  int tail;
};

int main() {
  struct queue q;
  int i;
  q.head = 1;
  q.tail = 1;
  
  // init queue
  for (i = 1; i <= 9; i++) {
    scanf("%d", &q.data[q.tail]);
    q.tail++;
  }

  // move and delete number
  while (q.head < q.tail) {
    printf("%d", q.data[q.head]);
    q.head++;

    q.data[q.tail] = q.data[q.head];
    q.head++;
    q.tail++;
  }

  getchar();
  getchar();
  return 0;
}