#include <stdio.h>
#include <stdlib.h>

// 辅助函数：指针基本知识
int pointer_foo() {
  int a = 10;
  int *p;
  // 指针B指向A，那么通过指针B即可访问变量A的值
  p = &a;
  printf("%d", *p);
  return 0;
}

// 辅助函数：动态开辟指针内存
int malloc_foo() {
  int *p;
  // 设置指针获取动态分配的内存地址
  p = (int *)malloc(sizeof(int));
  // 指针所存储的内存空间中存10
  *p = 10;
  printf("%d", *p);
  return 0;
}

// 结构体表示链表的节点类型
struct node {
  int data;
  // 声明一个指针，指向下一个 node 节点的指针
  struct node *next;
};

// 主函数
int main() {
  struct node *head, *p, *q, *t;
  int i, n, a;

  scanf("%d", &n);
  
  // 设置头指针初始为空
  head = NULL;
  for (i = 1; i <= n; i++) {
    scanf("%d", &a);
    // 动态申请临时节点
    p = (struct node *)malloc(sizeof(struct node));
    p -> data = a;
    p -> next = NULL;

    // 如果链表是空，那么就把头指针指向这个节点
    if (head == NULL) {
      head = p;
    }
    // 如果不是空链表，那么把前一个节点(q)的指针，指向当前节点(p)
    // 然后把当前节点变成前一个节点（q）
    else {
      q -> next = p;
      q = p;
    }
  }

  // 读入输入的数字（新加入的数字，放在临时变量a中）
  scanf("%d", &a);
  // 遍历链表，找到合适的插入位置
  t = head;
  while (t != NULL) {
    // 如果遍历到结尾，或者某个节点的值大于a
    // 那么把A节点插入其中（改变指针的指向）
    if (t -> next == NULL || t -> next -> data > a) {
      p = (struct node *)malloc(sizeof(struct node));
      p -> data = a;
      p -> next = t -> next;
      t -> next = p;
      break;
    }
    t = t -> next;
  }
  // 打印插入后的链表
  t = head;
  while (t != NULL) {
    printf("%d", t -> data);
    t = t -> next;
  }
  getchar();
  getchar();
  return 0;
}
