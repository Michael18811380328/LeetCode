# -*- coding:utf-8 -*-
# this is leetcode python

import math

# 292 nim-game 在nim游戏中获胜
def canWinNim(n):
  """
  :type n: int
  :rtype: bool
  """
  if n % 4 == 0:
    return False
  else:
    return True

# 204 统计所有小于非负整数 n 的质数的数量。
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

# 172 统计n的阶乘中0的数量
def trailingZeroes(n):
  if n < 5:
    return 0
  result = 0
  while n >= 5:
    reminder = n % 5
    quotient = (n - reminder) / 5;
    result = result + quotient
    n = quotient
  return result

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