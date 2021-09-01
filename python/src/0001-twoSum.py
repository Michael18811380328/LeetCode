# -*- coding:utf-8 -*-
# 01- twosum
def twoSum1(nums, target):
    for i in range(0, len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return None

def twoSum2(nums, target):
    hash = {}
    for i in range(0, len(nums)):
        item = nums[i]
        # index = hash[item] python 中访问一个不存在的键会报错
        # 所以，首先需要 dict.get(key) 判断
        index = hash.get(str(item))
        if index != None:
            return [index, i]
        key = str(target - item)
        hash[key] = i
