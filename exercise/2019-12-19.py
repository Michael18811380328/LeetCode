import math

def canWinNim(n):
  if n % 4 == 0:
    return False
  else:
    return True

def countPrimes(n):
  if n <= 2:
    return 0
  arr = [False, False]
  for i in range(2, n):
    arr.append(True)
  result = 0
  for i in range(2, n):
    if arr[i] == True:
      result = result + 1
      end = int(math.ceil(n / i)) + 1
      for j in range(i, end):
        item = i * j
        if item < n:
          arr[item] = False
  return result

def trailingZeros(n):
  if n < 5:
    return 0
  result = 0
  while n >= 5:
    remainder = n % 5
    quotient = (n - remainder) / 5
    result = result + quotient
    n = quotient
  return result

def guess(n):
  if n == 6:
    return 0
  elif n < 6:
    return 1
  else:
    return -1

def guessNumber(n):
  left = 1
  right = n
  while left < right
    mid = (left + right) >> 1
    if guess(mid) == 1:
      left = mid + 1
    else:
      right = mid
  return left

def deleteNode(node):
  node.val = node.next.val
  node.next = node.next.next
