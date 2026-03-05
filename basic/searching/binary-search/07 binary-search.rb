def binary_search(arr, target)
  left, right = 0, arr.length - 1

  while left <= right
    mid = left + (right - left) / 2

    if arr[mid] == target
      return mid # 找到目标
    elsif arr[mid] < target
      left = mid + 1 # 在右半边查找
    else
      right = mid - 1 # 在左半边查找
    end
  end
  -1 # 未找到
end

# 示例
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)

if result != -1
  puts "元素在索引 #{result} 处"
else
  puts "元素未找到"
end
