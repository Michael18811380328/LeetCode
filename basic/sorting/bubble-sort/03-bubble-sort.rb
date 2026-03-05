def bubble_sort(arr)
  n = arr.length
  (0...n - 1).each do |i|
    (0...n - i - 1).each do |j|
      if arr[j] > arr[j + 1]
        # 交换
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
      end
    end
  end
  arr
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = bubble_sort(arr)
puts "排序后的数组: #{sorted_arr}"
