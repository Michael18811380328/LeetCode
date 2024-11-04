以下是使用不同编程语言实现求数组最大值的示例。

### 1. C 语言实现

```c
#include <stdio.h>

int find_max(int* arr, int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int arr[] = {3, 5, 7, 2, 8, -1};
    int size = sizeof(arr) / sizeof(arr[0]);
    int max_value = find_max(arr, size);
    printf("Maximum value: %d\n", max_value);
    return 0;
}
```

### 2. Python 实现

```python
def find_max(arr):
    return max(arr)

arr = [3, 5, 7, 2, 8, -1]
max_value = find_max(arr)
print(f"Maximum value: {max_value}")
```

### 3. Java 实现

```java
public class MaxValue {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {3, 5, 7, 2, 8, -1};
        int maxValue = findMax(arr);
        System.out.println("Maximum value: " + maxValue);
    }
}
```

### 4. JavaScript 实现

```javascript
function findMax(arr) {
    return Math.max(...arr);
}

const arr = [3, 5, 7, 2, 8, -1];
const maxValue = findMax(arr);
console.log(`Maximum value: ${maxValue}`);
```

### 5. Ruby 实现

```ruby
def find_max(arr)
  arr.max
end

arr = [3, 5, 7, 2, 8, -1]
max_value = find_max(arr)
puts "Maximum value: #{max_value}"
```

这些代码示例展示了如何在不同编程语言中实现求数组最大值的功能。你可以根据需要进行调整和扩展。