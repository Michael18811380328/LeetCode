int countPairs(int* nums, int numsSize, int target){
  int i;
  int j;
  int result = 0;
  for (i = 0; i < numsSize; i++) {
    for (j = i + 1; j < numsSize; j++) {
      if (nums[i] + nums[j] < target) {
        result++;
      }
    }
  }
  return result;
}
