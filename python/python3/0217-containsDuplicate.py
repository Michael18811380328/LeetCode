class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}
        numsLen = len(nums)
        for i in range(0, numsLen):
            item = nums[i]
            if (item in dict):
                return True
            else:
                dict[item] = True
        return False
