### C 实现

```c
#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // 选择最后一个元素作为基准
    int i = (low - 1); // 小于基准的元素的索引

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // 交换
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // 交换基准元素到正确位置
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    quick_sort(arr, 0, n - 1);
    printf("排序后的数组: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

### Python 实现

```python
def partition(arr, low, high):
    pivot = arr[high]  # 选择最后一个元素作为基准
    i = low - 1  # 小于基准的元素的索引

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # 交换
    arr[i + 1], arr[high] = arr[high], arr[i + 1]  # 交换基准元素到正确位置
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
quick_sort(arr, 0, len(arr) - 1)
print("排序后的数组:", arr)
```

### Java 实现

```java
public class QuickSort {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // 选择最后一个元素作为基准
        int i = (low - 1); // 小于基准的元素的索引

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // 交换
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // 交换基准元素到正确位置
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        System.out.print("排序后的数组: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
def partition(arr, low, high)
  pivot = arr[high] # 选择最后一个元素作为基准
  i = low - 1 # 小于基准的元素的索引

  (low...high).each do |j|
    if arr[j] < pivot
      i += 1
      # 交换
      arr[i], arr[j] = arr[j], arr[i]
    end
  end
  # 交换基准元素到正确位置
  arr[i + 1], arr[high] = arr[high], arr[i + 1]
  i + 1
end

def quick_sort(arr, low, high)
  if low < high
    pi = partition(arr, low, high)
    quick_sort(arr, low, pi - 1)
    quick_sort(arr, pi + 1, high)
  end
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
quick_sort(arr, 0, arr.length - 1)
puts "排序后的数组: #{arr}"
```
