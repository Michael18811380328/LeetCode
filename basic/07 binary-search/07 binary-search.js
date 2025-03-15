function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (arr[mid] === target) {
          return mid; // 找到目标
      } else if (arr[mid] < target) {
          left = mid + 1; // 在右半边查找
      } else {
          right = mid - 1; // 在左半边查找
      }
  }
  return -1; // 未找到
}

// 示例
const arr = [2, 3, 4, 10, 40];
const target = 10;
const result = binarySearch(arr, target);

if (result !== -1) {
  console.log(`元素在索引 ${result} 处`);
} else {
  console.log("元素未找到");
}
