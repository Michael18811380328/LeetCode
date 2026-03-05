def insertion_sort(arr)
  (1...arr.length).each do |i|
    key = arr[i]
    j = i - 1
    # 将 arr[i] 插入到已排序部分
    while j >= 0 && arr[j] > key
      arr[j + 1] = arr[j]
      j -= 1
    end
    arr[j + 1] = key
  end
  arr
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = insertion_sort(arr)
puts "排序后的数组: #{sorted_arr}"
