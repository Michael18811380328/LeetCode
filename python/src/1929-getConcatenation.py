# https://leetcode.cn/problems/concatenation-of-array/
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums.extend(nums)
        return nums
