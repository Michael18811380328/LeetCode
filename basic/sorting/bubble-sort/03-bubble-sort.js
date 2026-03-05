function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // 交换
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
  }
  return arr;
}

// 示例
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log("排序后的数组:", sortedArr);
