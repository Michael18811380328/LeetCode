#include <stdio.h>

// 横坐标、纵坐标、父节点在队列中的编号、步数
struct node {
  int x;
  int y;
  int f;
  int s;
};

int main() {
  // 地图是50*50，所以队列不会超过2500个
  struct node que[2501];
  // todo
}