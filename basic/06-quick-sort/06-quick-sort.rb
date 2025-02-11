def partition(arr, low, high)
  pivot = arr[high] # 选择最后一个元素作为基准
  i = low - 1 # 小于基准的元素的索引

  (low...high).each do |j|
    if arr[j] < pivot
      i += 1
      # 交换
      arr[i], arr[j] = arr[j], arr[i]
    end
  end
  # 交换基准元素到正确位置
  arr[i + 1], arr[high] = arr[high], arr[i + 1]
  i + 1
end

def quick_sort(arr, low, high)
  if low < high
    pi = partition(arr, low, high)
    quick_sort(arr, low, pi - 1)
    quick_sort(arr, pi + 1, high)
  end
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
quick_sort(arr, 0, arr.length - 1)
puts "排序后的数组: #{arr}"
