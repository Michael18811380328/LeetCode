# -*- coding:utf-8 -*-

# 374 guess Number auxiliary function（辅助函数）
# 假设目标的数字是188
def guess(n):
    if n == 6:
        return 0
    elif n < 6:
        return 1
    else:
        return -1

# 374 guessNumber
def guessNumber(n):
    left = 1
    right = n
    while left < right:
        mid = (left + right) >> 1
        # print(left + (right - left)) leetcode 在线测试超时
        if guess(mid) == 1:
            # 中位数比猜的数小，因此比中位数小的数包括中位数都不是目标元素
            left = mid + 1
        else:
            right = mid
    # 最后剩下的数一定是所求，无需后处理
    return left
