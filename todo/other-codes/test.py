# coding=utf-8
from statistics import median


def getnum():
    nums = []
    inumStr = input("请输入数字（回车退出）：")
    while inumStr != "":
        nums.append(eval(inumStr))
        inumStr = input("请输入数字（回车退出):")
    return nums


def mean(numbers):
    s = 0.0
    for num in numbers:
        s = s + num
    return s / len(numbers)


def dev(numbers, mean):
    sorted(numbers)
    size = len(numbers)
    if size % 2 == 0:
        med = (numbers[size // 2 - 1] + numbers[size // 2]) / 2
    else:
        med = numbers[size // 2]
    return med

# 这里需要输入浮点数，否则format计算不正确
n = getnum()
m = mean(n)
print("平均值:{},方差{:.2},中位数:{}.".format(m, dev(n, m), median(n)))