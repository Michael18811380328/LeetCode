def check(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    add = 0
    nums_len = len(nums)
    if nums_len < 3:
        return True
    if nums[nums_len - 1] > nums[0]:
        add = add + 1
    for i in range(0, nums_len - 1):
        if nums[i] > nums[i + 1]:
            add = add + 1
        if add > 1:
            return False
    return True
