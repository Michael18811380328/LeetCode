class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        dict = {}
        numsLen = len(nums)
        for i in range(0, numsLen):
            item = nums[i]
            if (item in dict):
                return True;
            else:
                dict[item] = True
        return False
