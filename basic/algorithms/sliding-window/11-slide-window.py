# 我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。
def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return -1

    max_sum = 0
    window_sum = sum(arr[:k])  # 计算第一个窗口的和
    max_sum = window_sum

    # 移动窗口
    for i in range(k, n):
        window_sum += arr[i] - arr[i - k]  # 添加新元素，移除旧元素
        max_sum = max(max_sum, window_sum)

    return max_sum

# 示例
arr = [2, 1, 5, 1, 3, 2]
k = 3
result = max_sum_subarray(arr, k)
print("最大和为:", result)