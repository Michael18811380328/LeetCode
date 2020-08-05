# coding=utf-8
# 二分法
# 可以通过函数递归或者while循环实现二分法
def binary_search(arr, start, end, key):
  if start > end:
    return -1
  mid = start + (end - start) / 2
  if arr[mid] > key:
    return binary_search(arr, start, mid - 1, key)
  elif arr[mid] < key:
    return binary_search(arr, mid + 1, end, key)
  else:
    return mid

# while 版本
def binary_search2(arr, start, end, key):
  while start <= end:
    mid = start + (end - start)
    if arr[mid] < key:
      start = mid + 1
    elif arr[mid] > key:
      end = mid - 1
    else: 
      return mid
