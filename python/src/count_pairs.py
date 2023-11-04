from typing import List

# 2824
class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        result = 0
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if (nums[i] + nums[j]) < target:
                    result = result + 1
        return result
