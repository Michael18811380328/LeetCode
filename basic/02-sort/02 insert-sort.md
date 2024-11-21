### C 实现

```c
#include <stdio.h>

void insertion_sort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        // 将 arr[i] 插入到已排序部分
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertion_sort(arr, n);
    printf("排序后的数组: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

### Python 实现

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # 将 arr[i] 插入到已排序部分
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = insertion_sort(arr)
print("排序后的数组:", sorted_arr)
```

### Java 实现

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            // 将 arr[i] 插入到已排序部分
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        insertionSort(arr);
        System.out.print("排序后的数组: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
def insertion_sort(arr)
  (1...arr.length).each do |i|
    key = arr[i]
    j = i - 1
    # 将 arr[i] 插入到已排序部分
    while j >= 0 && arr[j] > key
      arr[j + 1] = arr[j]
      j -= 1
    end
    arr[j + 1] = key
  end
  arr
end

# 示例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = insertion_sort(arr)
puts "排序后的数组: #{sorted_arr}"
```
