# -*- coding:utf-8 -*-

# 172 统计n的阶乘中0的数量
def trailingZeroes(n):
    if n < 5:
        return 0
    result = 0
    while n >= 5:
        reminder = n % 5
        quotient = (n - reminder) / 5
        result = result + quotient
        n = quotient
    return result