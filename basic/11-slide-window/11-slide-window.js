// 我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。
function maxSumSubarray(arr, k) {
  const n = arr.length;
  if (n < k) return -1;

  let maxSum = 0;
  let windowSum = 0;

  // 计算第一个窗口的和
  for (let i = 0; i < k; i++) {
      windowSum += arr[i];
  }
  maxSum = windowSum;

  // 移动窗口
  for (let i = k; i < n; i++) {
      windowSum += arr[i] - arr[i - k]; // 添加新元素，移除旧元素
      maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// 示例
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
const result = maxSumSubarray(arr, k);
console.log("最大和为:", result);
