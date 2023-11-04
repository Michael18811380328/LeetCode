int sumOfSquares(int* nums, int numsSize){
  int i;
  int result = 0;
  for (i = 0; i < numsSize; i++) {
    if (numsSize % (i + 1) == 0) {
      result += (nums[i] * nums[i]);
    }
  }
  return result;
}
