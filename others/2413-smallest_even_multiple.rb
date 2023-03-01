# @param {Integer} n
# @return {Integer}
def smallest_even_multiple(n)
  return n % 2 == 0 ? n : 2 * n        
end
