def two_sum(nums, target):
    num_map = {}
    # enumerate() 内置函数，枚举字典
    for index, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return num_map[complement], index
        num_map[num] = index
    return None
