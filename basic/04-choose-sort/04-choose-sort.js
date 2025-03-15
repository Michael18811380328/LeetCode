function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      // 交换
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// 示例
let arr = [64, 25, 12, 22, 11];
let sortedArr = selectionSort(arr);
console.log("排序后的数组:", sortedArr);
