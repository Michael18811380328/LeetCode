# -*- coding:utf-8 -*-
# 0374 guessNumber

# 374 guess Number auxiliary function（辅助函数）
# 假设目标的数字是188
def guess(number):
    if number == 6:
        return 0
    if number < 6:
        return 1
    return -1

def guessNumber(number):
    left = 1
    right = number
    while left < right:
        mid = (left + right) >> 1
        # print(left + (right - left)) 在线测试超时，需要改成位运算
        if guess(mid) == 1:
            # 中位数比猜的数小，因此比中位数小的数包括中位数都不是目标元素
            left = mid + 1
        else:
            right = mid
    # 最后剩下的数一定是所求，无需后处理
    return left
