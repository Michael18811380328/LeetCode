# @param {String} num
# @return {String}
def largest_good_integer(num)
  tmp = ''

  for i in 2...(num.length)
    if num[i] === num[i - 1] && num[i] === num[i - 2]
      # string.to_i or string.to_f
      if tmp.length == 0 || (num[i].to_i > tmp.to_i)
        tmp = num[i];
      end
    end
  end

  if tmp === ''
    return '';
  end
  
  return tmp + tmp + tmp;  
end
