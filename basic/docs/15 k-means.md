以下是 K-means 均值算法的实现，这个算法用于将数据点分成 K 个簇。

### C 实现

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define MAX_POINTS 100
#define MAX_CLUSTERS 10

typedef struct {
    double x, y;
} Point;

typedef struct {
    Point centroid;
    Point points[MAX_POINTS];
    int point_count;
} Cluster;

double distance(Point a, Point b) {
    return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
}

void kmeans(Point points[], int num_points, Cluster clusters[], int k) {
    // 初始化聚类中心
    for (int i = 0; i < k; i++) {
        clusters[i].centroid = points[i]; // 随机选择初始中心
        clusters[i].point_count = 0;
    }

    int changed;
    do {
        changed = 0;

        // 清空之前的点
        for (int i = 0; i < k; i++) {
            clusters[i].point_count = 0;
        }

        // 分配每个点到最近的聚类
        for (int i = 0; i < num_points; i++) {
            int best_cluster = 0;
            double min_dist = distance(points[i], clusters[0].centroid);

            for (int j = 1; j < k; j++) {
                double dist = distance(points[i], clusters[j].centroid);
                if (dist < min_dist) {
                    min_dist = dist;
                    best_cluster = j;
                }
            }
            clusters[best_cluster].points[clusters[best_cluster].point_count++] = points[i];
            changed = 1;
        }

        // 更新聚类中心
        for (int i = 0; i < k; i++) {
            double sum_x = 0, sum_y = 0;
            for (int j = 0; j < clusters[i].point_count; j++) {
                sum_x += clusters[i].points[j].x;
                sum_y += clusters[i].points[j].y;
            }
            if (clusters[i].point_count > 0) {
                clusters[i].centroid.x = sum_x / clusters[i].point_count;
                clusters[i].centroid.y = sum_y / clusters[i].point_count;
            }
        }
    } while (changed);
}

int main() {
    Point points[MAX_POINTS] = {{1, 2}, {1, 4}, {1, 0}, {10, 2}, {10, 4}, {10, 0}};
    int num_points = 6;
    int k = 2;
    Cluster clusters[MAX_CLUSTERS];

    kmeans(points, num_points, clusters, k);

    for (int i = 0; i < k; i++) {
        printf("Cluster %d centroid: (%.2f, %.2f)\n", i, clusters[i].centroid.x, clusters[i].centroid.y);
    }

    return 0;
}
```

### Python 实现

```python
import numpy as np

def kmeans(points, k, max_iterations=100):
    # 随机选择初始聚类中心
    centroids = points[np.random.choice(points.shape[0], k, replace=False)]
    
    for _ in range(max_iterations):
        # 计算每个点到每个聚类中心的距离
        distances = np.linalg.norm(points[:, np.newaxis] - centroids, axis=2)
        
        # 分配每个点到最近的聚类中心
        labels = np.argmin(distances, axis=1)
        
        # 更新聚类中心
        new_centroids = np.array([points[labels == i].mean(axis=0) for i in range(k)])
        
        # 检查收敛
        if np.all(centroids == new_centroids):
            break
        
        centroids = new_centroids
    
    return centroids, labels

# 示例
points = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])
k = 2
centroids, labels = kmeans(points, k)

print("聚类中心:", centroids)
```

### Java 实现

```java
import java.util.Arrays;
import java.util.Random;

public class KMeans {
    static class Point {
        double x, y;

        Point(double x, double y) {
            this.x = x;
            this.y = y;
        }
    }

    static double distance(Point a, Point b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    static void kmeans(Point[] points, int k) {
        Point[] centroids = new Point[k];
        Random rand = new Random();

        // 随机选择初始聚类中心
        for (int i = 0; i < k; i++) {
            centroids[i] = points[rand.nextInt(points.length)];
        }

        boolean changed;
        do {
            changed = false;
            Point[][] clusters = new Point[k][points.length];
            int[] counts = new int[k];

            // 分配每个点到最近的聚类中心
            for (Point point : points) {
                int bestCluster = 0;
                double minDist = distance(point, centroids[0]);

                for (int j = 1; j < k; j++) {
                    double dist = distance(point, centroids[j]);
                    if (dist < minDist) {
                        minDist = dist;
                        bestCluster = j;
                    }
                }
                clusters[bestCluster][counts[bestCluster]++] = point;
            }

            // 更新聚类中心
            for (int i = 0; i < k; i++) {
                double sumX = 0, sumY = 0;
                for (int j = 0; j < counts[i]; j++) {
                    sumX += clusters[i][j].x;
                    sumY += clusters[i][j].y;
                }
                if (counts[i] > 0) {
                    Point newCentroid = new Point(sumX / counts[i], sumY / counts[i]);
                    if (distance(centroids[i], newCentroid) > 1e-5) {
                        changed = true;
                    }
                    centroids[i] = newCentroid;
                }
            }
        } while (changed);

        for (int i = 0; i < k; i++) {
            System.out.printf("Cluster %d centroid: (%.2f, %.2f)\n", i, centroids[i].x, centroids[i].y);
        }
    }

    public static void main(String[] args) {
        Point[] points = {new Point(1, 2), new Point(1, 4), new Point(1, 0), new Point(10, 2), new Point(10, 4), new Point(10, 0)};
        int k = 2;
        kmeans(points, k);
    }
}
```

### JavaScript 实现

```javascript
function distance(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

function kmeans(points, k, maxIterations = 100) {
    const centroids = points.slice(0, k);
    
    for (let iter = 0; iter < maxIterations; iter++) {
        const clusters = Array.from({length: k}, () => []);
        
        // 分配每个点到最近的聚类中心
        points.forEach(point => {
            let bestCluster = 0;
            let minDist = distance(point, centroids[0]);
            
            for (let j = 1; j < k; j++) {
                const dist = distance(point, centroids[j]);
                if (dist < minDist) {
                    minDist = dist;
                    bestCluster = j;
                }
            }
            clusters[bestCluster].push(point);
        });

        // 更新聚类中心
        let changed = false;
        for (let i = 0; i < k; i++) {
            if (clusters[i].length > 0) {
                const newCentroid = [
                    clusters[i].reduce((sum, p) => sum + p[0], 0) / clusters[i].length,
                    clusters[i].reduce((sum, p) => sum + p[1], 0) / clusters[i].length
                ];
                
                if (distance(newCentroid, centroids[i]) > 1e-5) {
                    changed = true;
                }
                centroids[i] = newCentroid;
            }
        }

        if (!changed) break;
    }

    return centroids;
}

// 示例
const points = [[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]];
const k = 2;
const centroids = kmeans(points, k);

console.log("聚类中心:", centroids);
```

### Ruby 实现

```ruby
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
```
