def getConcatenation(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    nums.extend(nums)
    return nums
