# 我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。
def max_sum_subarray(arr, k)
  n = arr.length
  return -1 if n < k

  max_sum = 0
  window_sum = arr[0...k].sum  # 计算第一个窗口的和
  max_sum = window_sum

  # 移动窗口
  (k...n).each do |i|
    window_sum += arr[i] - arr[i - k]  # 添加新元素，移除旧元素
    max_sum = [max_sum, window_sum].max
  end

  max_sum
end

# 示例
arr = [2, 1, 5, 1, 3, 2]
k = 3
result = max_sum_subarray(arr, k)
puts "最大和为: #{result}"
