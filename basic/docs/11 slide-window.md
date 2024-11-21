以下是滑动窗口算法的实现

我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。

### C 实现

```c
#include <stdio.h>

int max_sum_subarray(int arr[], int n, int k) {
    if (n < k) return -1;

    int max_sum = 0, window_sum = 0;

    // 计算第一个窗口的和
    for (int i = 0; i < k; i++) {
        window_sum += arr[i];
    }
    max_sum = window_sum;

    // 移动窗口
    for (int i = k; i < n; i++) {
        window_sum += arr[i] - arr[i - k]; // 添加新元素，移除旧元素
        if (window_sum > max_sum) {
            max_sum = window_sum;
        }
    }
    return max_sum;
}

int main() {
    int arr[] = {2, 1, 5, 1, 3, 2};
    int k = 3;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = max_sum_subarray(arr, n, k);
    printf("最大和为: %d\n", result);
    return 0;
}
```

### Python 实现

```python
def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return -1

    max_sum = 0
    window_sum = sum(arr[:k])  # 计算第一个窗口的和
    max_sum = window_sum

    # 移动窗口
    for i in range(k, n):
        window_sum += arr[i] - arr[i - k]  # 添加新元素，移除旧元素
        max_sum = max(max_sum, window_sum)

    return max_sum

# 示例
arr = [2, 1, 5, 1, 3, 2]
k = 3
result = max_sum_subarray(arr, k)
print("最大和为:", result)
```

### Java 实现

```java
public class SlidingWindow {
    public static int maxSumSubarray(int[] arr, int k) {
        int n = arr.length;
        if (n < k) return -1;

        int maxSum = 0;
        int windowSum = 0;

        // 计算第一个窗口的和
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;

        // 移动窗口
        for (int i = k; i < n; i++) {
            windowSum += arr[i] - arr[i - k]; // 添加新元素，移除旧元素
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 1, 3, 2};
        int k = 3;
        int result = maxSumSubarray(arr, k);
        System.out.println("最大和为: " + result);
    }
}
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
def max_sum_subarray(arr, k)
  n = arr.length
  return -1 if n < k

  max_sum = 0
  window_sum = arr[0...k].sum  # 计算第一个窗口的和
  max_sum = window_sum

  # 移动窗口
  (k...n).each do |i|
    window_sum += arr[i] - arr[i - k]  # 添加新元素，移除旧元素
    max_sum = [max_sum, window_sum].max
  end

  max_sum
end

# 示例
arr = [2, 1, 5, 1, 3, 2]
k = 3
result = max_sum_subarray(arr, k)
puts "最大和为: #{result}"
```
