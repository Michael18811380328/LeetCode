### C 实现

```c
#include <stdio.h>

int binary_search(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid; // 找到目标
        } else if (arr[mid] < target) {
            left = mid + 1; // 在右半边查找
        } else {
            right = mid - 1; // 在左半边查找
        }
    }
    return -1; // 未找到
}

int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 10;
    int result = binary_search(arr, size, target);
    
    if (result != -1) {
        printf("元素在索引 %d 处\n", result);
    } else {
        printf("元素未找到\n");
    }
    return 0;
}
```

### Python 实现

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid  # 找到目标
        elif arr[mid] < target:
            left = mid + 1  # 在右半边查找
        else:
            right = mid - 1  # 在左半边查找
    return -1  # 未找到

# 示例
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)

if result != -1:
    print(f"元素在索引 {result} 处")
else:
    print("元素未找到")
```

### Java 实现

```java
public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid; // 找到目标
            } else if (arr[mid] < target) {
                left = mid + 1; // 在右半边查找
            } else {
                right = mid - 1; // 在左半边查找
            }
        }
        return -1; // 未找到
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int target = 10;
        int result = binarySearch(arr, target);
        
        if (result != -1) {
            System.out.println("元素在索引 " + result + " 处");
        } else {
            System.out.println("元素未找到");
        }
    }
}
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
def binary_search(arr, target)
  left, right = 0, arr.length - 1

  while left <= right
    mid = left + (right - left) / 2

    if arr[mid] == target
      return mid # 找到目标
    elsif arr[mid] < target
      left = mid + 1 # 在右半边查找
    else
      right = mid - 1 # 在左半边查找
    end
  end
  -1 # 未找到
end

# 示例
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)

if result != -1
  puts "元素在索引 #{result} 处"
else
  puts "元素未找到"
end
```
