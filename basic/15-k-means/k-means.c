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
