function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      // 将 arr[i] 插入到已排序部分
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }
  return arr;
}

// 示例
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = insertionSort(arr);
console.log("排序后的数组:", sortedArr);
