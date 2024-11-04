以下是使用不同编程语言实现“两数之和”算法的示例。该算法的目标是找到数组中两个数的和等于目标值的索引。

### 1. C 语言实现

```c
#include <stdio.h>

void two_sum(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                printf("Indices: %d, %d\n", i, j);
                return;
            }
        }
    }
    printf("No solution found.\n");
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    two_sum(nums, sizeof(nums) / sizeof(nums[0]), target);
    return 0;
}
```

### 2. Python 实现

```python
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return num_map[complement], i
        num_map[num] = i
    return None

nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Indices: {result}") if result else print("No solution found.")
```

### 3. Java 实现

```java
import java.util.HashMap;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return new int[]{-1, -1}; // No solution
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        if (result[0] != -1) {
            System.out.printf("Indices: %d, %d%n", result[0], result[1]);
        } else {
            System.out.println("No solution found.");
        }
    }
}
```

### 4. JavaScript 实现

```javascript
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null; // No solution
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
if (result) {
    console.log(`Indices: ${result}`);
} else {
    console.log("No solution found.");
}
```

### 5. Ruby 实现

```ruby
def two_sum(nums, target)
  num_map = {}
  nums.each_with_index do |num, i|
    complement = target - num
    return [num_map[complement], i] if num_map.key?(complement)
    num_map[num] = i
  end
  nil # No solution
end

nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
if result
  puts "Indices: #{result}"
else
  puts "No solution found."
end
```

这些代码示例展示了如何在不同编程语言中实现“两数之和”算法。你可以根据需要进行调整和扩展。