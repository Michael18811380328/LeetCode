#include <stab.h>

void selection_sort(int arr[], int len) {
  int i, j, tmp;
  for (i = 0; i < len - 1; i ++) {
    int min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
}

void swap(int *a, int *b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}
