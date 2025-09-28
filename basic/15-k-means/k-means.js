function distance(a, b) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

/**
 * K-means 聚类算法
 * @param {Array} points - 数据点数组，每个点是一个数组
 * @param {number} k - 聚类中心数量
 * @param {number} maxIterations - 最大迭代次数
 * @returns {Array} - 聚类中心数组
 */
function kmeans(points, k, maxIterations = 100) {
  const centroids = points.slice(0, k); // 初始化聚类中心
  
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
      if (!changed) break; // 如果更新后的聚类中心不变，停止迭代
  }

  return centroids;
}

// 示例
const points = [[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]]; // 数据点
const k = 2; // 聚类中心数量
const centroids = kmeans(points, k); // 聚类中心

console.log("聚类中心:", centroids);
