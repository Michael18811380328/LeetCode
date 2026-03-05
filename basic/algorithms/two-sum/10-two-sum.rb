def two_sum(nums, target)
  num_map = {}
  nums.each_with_index do |num, i|
    complement = target - num
    return [num_map[complement], i] if num_map.key?(complement)
    num_map[num] = i
  end
  nil
end
