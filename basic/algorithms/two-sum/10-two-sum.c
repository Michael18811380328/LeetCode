#include <stdio.h>

void two_sum(int* nums, int numsSize, int target) {
  for (int i = 0; i < numsSize; i++) {
    for (int j = i + 1; j < numsSize; j++) {
      if (nums[i] + nums[j] == target) {
        printf("%d, %d", i, j);
        return;
      }
    }
  }
  print("No result");
}

int main() {
  int nums[] = {1, 2, 8, 10};
  int target = 9;
  int size = sizeof(nums) / sizeof(nums[0]);
  two_sum(nums, size, target);
  return 0;
}
