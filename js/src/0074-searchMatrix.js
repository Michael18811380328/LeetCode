/*
 * [74] 搜索二维矩阵
 */

// 辅助函数：判断一维数组是否有效
function isValid(arr, target) {
  if (!arr || arr.length === 0) {
    return false;
  }
  return arr[0] <= target && arr[arr.length - 1] >= target;
}

// 辅助函数：搜索一维数组
function searchArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.ceil((start + end) / 2);
  // 处理特殊情况
  if (arr.length === 0) {
    return false;
  }
  if (arr[start] === target || arr[end] === target) {
    return true;
  }
  if (arr[start] > target || arr[end] < target) {
    return false;
  }
  while (start <= end) {
    if (arr[middle] === target) {
      return true;
    }
    if (arr[middle] > target) {
      end = middle;
      middle = Math.ceil((start + end) / 2);
    } else if (arr[middle] < target) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
    if (middle === start || middle === end) {
      return false;
    }
  }
  return false;
}

// 方法一：二分搜索（LogN * logN）
// Your runtime beats 57.68 % of javascript submissions; memory usage beats 27.04 %
function searchMatrix(matrix, target) {
  // m表示行数
  const m = matrix.length;
  // 处理空数组的情况
  if (m === 0) {
    return false;
  }
  // n 表示列数
  const n = matrix[0].length;
  // 开始的行和结束的行
  let start = 0;
  let end = m - 1;
  // 最大最小值超出范围，没找到
  if (matrix[start][0] > target || matrix[end][n - 1] < target) {
    return false;
  }
  // 最大最小值等于，找到
  if (matrix[start][0] === target || matrix[end][n - 1] === target) {
    return true;
  }
  // 开始二分行，查找区间
  let mid = Math.ceil((start + end) / 2);
  // 先检索第一个和最后一个子数组
  if (isValid(matrix[start], target)) {
    return searchArray(matrix[start], target);
  }
  if (isValid(matrix[end], target)) {
    return searchArray(matrix[end], target);
  }
  // 如果中间的数组正好满足条件
  while (start <= end) {
    if (mid === start || mid === end) {
      return false;
    }
    if (isValid(matrix[mid], target)) {
      return searchArray(matrix[mid], target);
    }
    if (matrix[mid][0] > target) {
      end = mid;
      mid = Math.ceil((start + end) / 2);
    } else if (matrix[mid][n - 1] < target) {
      start = mid;
      mid = Math.ceil((start + end) / 2);
    }
  }
  return false;
}

// 方法二：不考虑算法复杂度，直接打平计算
// Your runtime beats 18.55 % of javascript submissions
// Your memory usage beats 12.7 % of javascript submissions (39.2 MB)
function searchMatrix2(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  const arr = matrix.flat();
  return arr.includes(target);
}

export { searchMatrix, searchMatrix2, searchArray };
