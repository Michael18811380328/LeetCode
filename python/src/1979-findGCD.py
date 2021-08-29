import math

def findGCD(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    list_max = max(nums)
    list_min = min(nums)
    if list_max == list_min or list_max % list_min == 0:
        return list_min
    start = math.floor(list_min / 2 + 1)
    while start > 0:
        if list_max % start == 0 and list_min % start == 0:
            return int(start)
        start = start - 1
    return 1
