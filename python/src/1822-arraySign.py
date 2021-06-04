# 8 ms, 在所有 Python 提交中击败了99.71%
def arraySign(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    minus_times = 0
    nums_len = len(nums)

    for i in range(0, nums_len):
        item = nums[i]
        if item == 0:
            return 0
        if item < 0:
            minus_times += 1
    if minus_times % 2 == 0:
        return 1
    else:
        return -1
