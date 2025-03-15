require 'matrix'

def lda(data, labels)
  classes = labels.uniq
  mean_overall = data.mean(axis: 0)
  mean_classes = classes.map { |c| data[labels == c].mean(axis: 0) }

  S_B = Matrix.zero(data.column_count)
  S_W = Matrix.zero(data.column_count)

  classes.each_with_index do |c, i|
    n_c = data[labels == c].row_count
    mean_diff = mean_classes[i] - mean_overall
    S_B += n_c * mean_diff.outer_product(mean_diff)
  end

  classes.each_with_index do |c, i|
    data[labels == c].each_row do |row|
      mean_diff = row - mean_classes[i]
      S_W += mean_diff.outer_product(mean_diff)
    end
  end

  w = S_B * S_W.inverse
  w.eigenvectors.map(&:to_a).flatten
end

data = Matrix[[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]]
labels = [0, 0, 0, 1, 1, 1]
weights = lda(data, labels)
puts "LDA weights: #{weights}"
