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
