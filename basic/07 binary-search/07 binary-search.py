def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid  # 找到目标
        elif arr[mid] < target:
            left = mid + 1  # 在右半边查找
        else:
            right = mid - 1  # 在左半边查找
    return -1  # 未找到

# 示例
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)

if result != -1:
    print(f"元素在索引 {result} 处")
else:
    print("元素未找到")