def knapsack(W, wt, val, n)
  K = Array.new(n + 1) { Array.new(W + 1, 0) }

  (0..n).each do |i|
    (0..W).each do |w|
      if i == 0 || w == 0
        K[i][w] = 0
      elsif wt[i - 1] <= w
        K[i][w] = [val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]].max
      else
        K[i][w] = K[i - 1][w]
      end
    end
  end

  K[n][W]
end

# 示例
val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = val.length
result = knapsack(W, wt, val, n)
puts "最大价值为: #{result}"
