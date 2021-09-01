# -*- coding:utf-8 -*-
import math

"""204 统计所有小于非负整数 n 的质数的数量。"""
def countPrimes(n):
    """
    :type n: int
    :rtype: int
    """
    if n <= 2:
        return 0
    # we can't use arr[i] = True when initial
    arr = [False, False]
    for i in range(2, n):
        arr.append(True)

    result = 0
    for i in range(2, n):
        if arr[i] == True:
            result = result + 1
            end = int(math.ceil(n / i)) + 1
            # set i * n as False
            for j in range(i, end):
                item = i * j
                if item < n:
                    arr[item] = False

    return result
