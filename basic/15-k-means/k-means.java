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
