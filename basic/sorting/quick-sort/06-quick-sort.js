function partition(arr, low, high) {
  const pivot = arr[high]; // 选择最后一个元素作为基准
  let i = low - 1; // 小于基准的元素的索引

  for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
          i++;
          // 交换
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
  }
  // 交换基准元素到正确位置
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
      const pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
  }
}

// 示例
const arr = [64, 34, 25, 12, 22, 11, 90];
quickSort(arr, 0, arr.length - 1);
console.log("排序后的数组:", arr);
