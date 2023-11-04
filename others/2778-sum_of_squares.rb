# @param {Integer[]} nums
# @return {Integer}
def sum_of_squares(nums)
  result = 0
  for i in 0...(nums.length)
    if nums.length % (i + 1) == 0
      result += (nums[i] * nums[i])
    end
  end
  return result
end
