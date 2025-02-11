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
