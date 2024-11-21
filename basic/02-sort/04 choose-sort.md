### C 实现

```c
#include <stdio.h>

void selection_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_index = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // 交换
        int temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    selection_sort(arr, n);
    printf("排序后的数组: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

### Python 实现

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # 交换
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

# 示例
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
print("排序后的数组:", sorted_arr)
```

### Java 实现

```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // 交换
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        System.out.print("排序后的数组: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
def selection_sort(arr)
  n = arr.length
  (0...n - 1).each do |i|
    min_index = i
    (i + 1...n).each do |j|
      if arr[j] < arr[min_index]
        min_index = j
      end
    end
    # 交换
    arr[i], arr[min_index] = arr[min_index], arr[i]
  end
  arr
end

# 示例
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
puts "排序后的数组: #{sorted_arr}"
```
