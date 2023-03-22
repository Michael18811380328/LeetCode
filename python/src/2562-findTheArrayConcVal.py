import math

class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        result = 0
        end = math.ceil(len(nums) / 2)
        for i in range(0, end):
            if i != len(nums) - 1 - i:
                curr = str(nums[i]) + str(nums[len(nums) - 1 - i])
                curr = int(curr)
                result = result + curr
            else:
                result = result + nums[i]
        return result
