int h[101];

// 向下调整
void siftdown(int i) {
  int t, flag = 0;
  while (i * 2 <= n && flag == 0) {
    if (h[i] > h[i * 2]) {
      t = i * 2;
    }
    else {
      t = i;
    }
    if (i * 2 + 1 <= n) {
      if (h[t] > h[i * 2 + 1]) {
        t = i * 2 + 1;
      }
    }
    if (t != i) {
      swap(t, i);
      i = t;
    }
    else {
      flag = 1; // stop
    }
  }
  return;
}
