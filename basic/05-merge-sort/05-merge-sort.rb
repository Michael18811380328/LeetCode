def merge(left, right)
  result = []
  i = j = 0
  while i < left.length && j < right.length
    if left[i] <= right[j]
      result << left[i]
      i += 1
    else
      result << right[j]
      j += 1
    end
  end
  result.concat(left[i..-1]).concat(right[j..-1])
end

def merge_sort(arr)
  return arr if arr.length <= 1
  mid = arr.length / 2
  left = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])
  merge(left, right)
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = merge_sort(arr)
puts "排序后的数组: #{sorted_arr}"
