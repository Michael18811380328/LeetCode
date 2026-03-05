class KMeans
  def initialize(points, k)
    @points = points
    @k = k
    @centroids = []
  end

  def distance(a, b)
    Math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)
  end

  def kmeans(max_iterations = 100)
    @centroids = @points.sample(@k)

    max_iterations.times do
      clusters = Array.new(@k) { [] }

      # 分配每个点到最近的聚类中心
      @points.each do |point|
        best_cluster = 0
        min_dist = distance(point, @centroids[0])

        @centroids.each_with_index do |centroid, index|
          dist = distance(point, centroid)
          if dist < min_dist
            min_dist = dist
            best_cluster = index
          end
        end
        clusters[best_cluster] << point
      end

      # 更新聚类中心
      new_centroids = clusters.map do |cluster|
        next if cluster.empty?
        x = cluster.map(&:first).sum / cluster.size
        y = cluster.map(&:last).sum / cluster.size
        [x, y]
      end.compact

      break if new_centroids == @centroids
      @centroids = new_centroids
    end

    @centroids
  end
end

# 示例
points = [[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]]
k = 2
kmeans = KMeans.new(points, k)
centroids = kmeans.kmeans

puts "聚类中心: #{centroids.inspect}"
