# https://leetcode.cn/problems/sign-of-the-product-of-an-array/
class Solution:
    def arraySign(self, nums: List[int]) -> int:
        minus_times = 0
        nums_len = len(nums)
        for i in range(0, nums_len):
            item = nums[i]
            if item == 0:
                return 0
            if item < 0:
                minus_times += 1
        return 1 if minus_times % 2 == 0 else -1
