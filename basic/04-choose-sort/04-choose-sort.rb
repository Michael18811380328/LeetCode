def selection_sort(arr)
  n = arr.length
  (0...n - 1).each do |i|
    min_index = i
    (i + 1...n).each do |j|
      if arr[j] < arr[min_index]
        min_index = j
      end
    end
    # 交换
    arr[i], arr[min_index] = arr[min_index], arr[i]
  end
  arr
end

# 示例
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
puts "排序后的数组: #{sorted_arr}"
