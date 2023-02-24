# @param {Integer[]} nums
# @return {Integer[]}
def number_of_pairs(nums)
  dict = {};
  pair = 0;
  remain = 0;
  nums.each do |i|
    if dict[i]
      dict[i] = nil;
      pair = pair + 1;
      remain = remain - 1;
    else
      dict[i] = true;
      remain = remain + 1;
    end
  end
  return [pair, remain];
end
