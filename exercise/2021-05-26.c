#include <stdio.h>

// 两个人手里的牌是队列
struct queue {
  int data[1000];
  int head;
  int tail;
}

// 桌面上的排是栈
struct stack {
  int data[10];
  int top;
}

int main() {
  int book[10];
  int i, j;

  struct queue q1, q2;
  q1.head = 1;
  q1.tail = 1;
  q2.head = 1;
  q2.tail = 1;

  struct stack s;
  s.top = 0;

  for (i = 0; i < 9; i++) {
    book[i] = 0;
  }
  for (i = 1; i < 6; i++) {
    scanf("%d", &q1.data[q1.tail]);
    q1.tail++;
    scanf("%d", &q2.data[q2.tail]);
    q2.tail++;
  }

  // 开始出牌
  while (q1.head < q1.tail && q2.head < q2.tai) {
    // 这部分可以封装成一个函数
    t = q1.data[q1.head];
    if (book[t] == 0) {
      q1.head++;
      s.top++;
      s.data[s.top] = t;
      book[t] = 1;
    }
    else {
      q1.head++;
      q1.data[q1.tail] = t;
      q1.tail++;
      while (s.data[s.top] != t) {
        book[s.data[s.top]] = 0;
        q1.data[q1.tail] = s.data[s.top];
        q1.tail++;
        s.top--;
      }
      book[s.data[s.top]] = 0;
      q1.data[q1.tail] = s.data[s.top];
      q1.tail++;
      s.top--;
    }

    if (q1.head == q1.tail) {
      break;
    }

    t = q2.data[q2.head];
    if (book[t] == 0) {
      q2.head++;
      s.top++;
      s.data[s.top] = t;
      book[t] = 1;
    }
    else {
      q2.head++;
      q.data[q2.tail] = t;
      q2.tail++;
      while (s.data[s.top] != t) {
        book[s.data[s.top]] = 0;
        q2.data[q2.tail] = s.data[s.top];
        q2.tail++;
        s.top--;
      }
      book[s.data[s.top]] = 0;
      q2.data[q2.tail] = s.data[s.top];
      q2.tail++;
      s.top--;
    }
  }

  // 如果第二个队列是空的，那么第一个人赢
  if (q2.head == q2.tail) {
    printf('A is win');
  }
  else {
    printf('B is win');
  }
  return 0;
}
