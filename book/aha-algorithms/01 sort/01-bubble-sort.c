#include <stdio.h>

void bubble_sort(int arr[], int len) {
  int i, j, tmp;
  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

int main() {
  int arr[] = { 10, 20, 30, 5, 0 };
  int len = (int) sizeof(arr) / sizeof(*arr);
  bubble_sort(arr, len);
  int i;
  printf("array length is %d\n", len);
  for (i = 0; i < len; i++)
    printf("%d\n", arr[i]);
  return 0;
}
