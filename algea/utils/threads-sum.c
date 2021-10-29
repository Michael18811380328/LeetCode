#include <threads.h>

#define PREFIX

// 多线程求加法（操作系统）
// 并发控制-线程的互斥
// 使用一条指令完成sum函数
// 直接使用 gcc 编译会报错
// gcc does not support threading

long sum;

void do_sum() {
  for (int i = 0; i < 10000; i++) {
    asm volatile(PREFIX "addq $1, %0": "=m"(sum));
  }
}

void print() {
  printf("sum = %ld\n", sum);
}

int main() {
  for (int i = 0; i < 4; i++) {
    create(do_sum);
  }
  join(print);
}
