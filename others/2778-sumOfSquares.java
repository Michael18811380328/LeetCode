class Solution {
  public int sumOfSquares(int[] nums) {
    int i;
    int result = 0;
    int n = nums.length;
    for (i = 0; i < n; i++) {
      if (n % (i + 1) == 0) {
        result += (nums[i] * nums[i]);
      }
    }
    return result;
  }
}
