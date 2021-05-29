#include <stdio.h>
#include <stdlib.h>

// 8 ms, 在所有 C 提交中击败了61.76%
int getMinDistance(int* nums, int numsSize, int target, int start){
  if (nums[start] == target) {
    return 0;
  }
  int i;
  int min = numsSize;
  for (i = 0; i < numsSize; i++) {
      if (nums[i] == target) {
          int tmpAbs = fabs(i - start);
          if (tmpAbs < min) {
              min = tmpAbs;
          }
      } 
  }
  return min;
}
