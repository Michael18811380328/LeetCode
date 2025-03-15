def linear_regression(x, y)
  n = x.length
  sum_x = x.sum
  sum_y = y.sum
  sum_xy = x.zip(y).map { |a, b| a * b }.sum
  sum_x2 = x.map { |a| a * a }.sum

  m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)
  b = (sum_y - m * sum_x) / n

  return m, b
end

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
m, b = linear_regression(x, y)
puts "y = #{m.round(2)}x + #{b.round(2)}"
