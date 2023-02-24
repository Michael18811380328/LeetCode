# https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated/
class Solution:
    def check(self, nums: List[int]) -> bool:
        tmp = 0
        nums_len = len(nums)
        if nums_len < 3:
            return True
        if nums[0] < nums[nums_len - 1]:
            tmp = tmp + 1
        for i in range(0, nums_len - 1):
            if nums[i] > nums[i + 1]:
                tmp = tmp + 1
            if tmp > 1:
                return False
        return True
