#include <stdio.h>

struct queue {
  int data[100];
  int head;
  int tail;
};

struct stack {
  int data[10];
  int top;
};

int main() {
  struct queue q1, q2;
  struct stack s;
  int book[10];
  int i, t;

  // init queue
  q1.head = 1;
  q1.tail = 1;
  q2.head = 1;
  q2.tail = 1;

  // init stack
  s.top = 0;

  // init array (cards in desk) no card i is 0, has card i is 1
  for (i = 0; i < 10; i++) {
    book[i] = 0;
  }

  // each user has 6 cards
  for (i = 1; i <= 6; i++) {
    scanf("%d", &q1.data[q1.tail]);
    q1.tail++;
    scanf("%d", &q2.data[q2.tail]);
    q2.tail++;
  }

  while (q1.head < q1.tail && q2.head < q2.tail) {
    t = q1.data[q1.head];
    // check if there is a card is equal with q1 head
    if (book[t] == 0) {
      q1.head++;
      s.top++;
      s.data[s.top] = t;
      book[t] = 1;
    }
    // 如果桌面上已经有这张牌
    else {
      // 先把打出的这张牌收回到末尾
      q1.head++;
      q1.data[q1.tail] = t;
      q1.tail++;
      // 然后遍历桌面上的纸牌，放到队列尾部，并取消标记
      while (s.data[s.top] != t) {
        book[s.data[s.top]] = 0;
        q1.data[q1.tail] = s.data[s.top];
        q1.tail++;
        s.top--;
      }
      // 收回桌面上牌面为t的牌
      book[s.data[s.top]] = 0;
      q1.data[q1.tail] = s.data[s.top];
      q1.tail++;
      s.top--;
    }

    // 如果开始等于结束，证明手中无牌，结束
    if (q1.head == q1.tail) {
      break;
    }

    // 另一个人
    t = q2.data[q2.head];
    // check if there is a card is equal with q2 head
    if (book[t] == 0) {
      q2.head++;
      s.top++;
      s.data[s.top] = t;
      book[t] = 1;
    }
    // 如果桌面上已经有这张牌
    else {
      // 先把打出的这张牌收回到末尾
      q2.head++;
      q2.data[q2.tail] = t;
      q2.tail++;
      // 然后遍历桌面上的纸牌，放到队列尾部，并取消标记
      while (s.data[s.top] != t) {
        book[s.data[s.top]] = 0;
        q2.data[q2.tail] = s.data[s.top];
        q2.tail++;
        s.top--;
      }
      // 收回桌面上牌面为t的牌
      book[s.data[s.top]] = 0;
      q2.data[q2.tail] = s.data[s.top];
      q2.tail++;
      s.top--;
    }
  }
  // 结束游戏判断
  if (q2.head == q2.tail) {
    for (i = q1.head; i < q1.tail; i++) {
      printf("%d", q1.data[i]);
    }
    if (s.top > 0) {
      for (i = 0; i < s.top; i++) {
        printf("%d", s.data[i]);
      }
    }
    else {
      printf("There is no card in dest");
    }
  }
  else {
    for (i = q2.head; i < q2.tail; i++) {
      printf("%d", q2.data[i]);
    }
    if (s.top > 0) {
      for (i = 0; i < s.top; i++) {
        printf("%d", s.data[i]);
      }
    }
    else {
      printf("There is no card in dest");
    }
  }

  getchar();
  getchar();
  return 0;
}
