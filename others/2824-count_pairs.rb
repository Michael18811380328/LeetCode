# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def count_pairs(nums, target)
    result = 0
    for i in 0...(nums.length)
        for j in (i + 1)...(nums.length)
            if (nums[i] + nums[j]) < target
                result = result + 1
            end
        end
    end
    return result
end
