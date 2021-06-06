#include <stdio.h>

int main() {
  int dis[10];
  int i, k, m, n, u[10], v[10], w[10];
  scanf("%d %d", &n, &m);

  for (i = 1; i <= m; i++) {
    scanf("%d %d %d", &u[i], &v[i], &w[i]);
  }

  for (i = 1; i <= n; i++) {
    dis[i] = inf;
  }

  dis[1] = 0;

  // important
  for (k = 1; k <= n - 1; k++) {
    for (i = 1; i <= m; i++) {
      if (dis[v[i]] > dis[u[i]] + w[i]) {
        dis[v[i]] = dis[u[i]] + w[i];
      }
    }
  }
  for (i = 1; i <= n; i++) {
    printf("%d", dis[i]);
  }
  getchar();
  return 0;
}
