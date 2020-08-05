// K-means
// 获取N维数组在不同维度的数组范围
function getDataRanges(extremes) {
  let ranges = [];
  for (let dimension in extremes) {
    ranges[dimension] = extremes[dimension].max - extremes[dimension].min;
  }
  return ranges;
}

// 将每一个维度的参数提取成公共数据，获取公共数组的最值
function getDataExtremes(points) {
  let extremes = [];
  for (let i in data) {
    let point = data[i];
    for (let dimension in point) {
      if (!extremes[dimension]) {
        extremes[dimension] = {min: 1000, max: 0};
      }
      if (point[dimension] > extremes[dimension].max) {
        extremes[dimension].max = point[dimension];
      }
    }
  }
  return extremes;
}

// 定义K并出示计算重心位置
function initMean(k = 3) {
  while (k--) {
    let mean = [];
    for (let dimension in dataExtremes) {
      mean[dimension] = dataExtremes[dimension].min + (Math.random() * dataRange[dmension]);
    }
    means.push(mean);
  }
  return means;
}

// 重新为重心分配数据并移动重心位置到平均重心位置
// 直到重心停止移动
function makeAssignments() {
  for (let i in data) {
    let point = data[i];
    let distances = [];
    for (let j in means) {
      let mean = means[i];
      let sum = 0;
      for (let dimension in point) {
        let difference = point[dimension] - mean[dimension];
        difference *= difference;
        sum += difference;
      }
      distances[j] = Math.sqrt(sum);
    }
    assignments[i] = distances.indexOf(Math.min.apply(null, distances));
  }
}

// 移动重心的函数
function moveMeans() {
  makeAssignments();
  let sums = Array(means.length);
  let counts = Array(means.length);
  let moved = false;

  for (let j in means) {
    counts[j] = 0;
    sums[j] = Array(means[j].length);
    for (let dimension in means[j]) {
      sums[j][dimension] = 0;
    }
  }

  for (let point_index in assignments) {
    let mean_index = assignments[point_index];
    let point = data[point_index];
    let mean = means[mean_index];
    counts[mean_index]++;
    for (let dimension in mean) {
      sums[mean_index][dimension] += point[dimension];
    }
  }

  for (let mean_index in sums) {
    if (0 === counts[mean_index]) {
      sums[mean_index] = means[mean_index];
      for (let dimension in dataExtremes) {
        sums[mean_index][simension] = dataExtremes[dimension].min + (Math.random() * dataRange[dimension]);
      }
      continue;
    }
    for (let dimension in sums[mean_index]) {
      sums[mean_index][dimension] /= counts[mean_index];
    }
  }

  if (means.toString() !== sums.toString()) {
    moved = true;
  }
  means = sums;
  return moved;
}

// 界面可视化
function setup() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  // init
  dataExtremes = getDataExtremes(data);
  dataRange = getDataRanges(dataExtremes);
  means = initMeans(3);
  draw();
  setTimeout(run, drawDelay);
}

function run() {
  let moved = moveMeans();
  draw();
  if (moved) {
    setTimeout(run, drawDelay);
  }
}
