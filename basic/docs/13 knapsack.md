### C 实现

```c
#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int knapsack(int W, int wt[], int val[], int n) {
    int K[n + 1][W + 1];

    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            } else if (wt[i - 1] <= w) {
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }
    return K[n][W];
}

int main() {
    int val[] = {60, 100, 120};
    int wt[] = {10, 20, 30};
    int W = 50;
    int n = sizeof(val) / sizeof(val[0]);
    int result = knapsack(W, wt, val, n);
    printf("最大价值为: %d\n", result);
    return 0;
}
```

### Python 实现

```python
def knapsack(W, wt, val, n):
    K = [[0 for _ in range(W + 1)] for _ in range(n + 1)]

    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i - 1] <= w:
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w])
            else:
                K[i][w] = K[i - 1][w]

    return K[n][W]

# 示例
val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = len(val)
result = knapsack(W, wt, val, n)
print("最大价值为:", result)
```

### Java 实现

```java
public class Knapsack {
    public static int knapsack(int W, int wt[], int val[], int n) {
        int[][] K = new int[n + 1][W + 1];

        for (int i = 0; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                if (i == 0 || w == 0) {
                    K[i][w] = 0;
                } else if (wt[i - 1] <= w) {
                    K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
                } else {
                    K[i][w] = K[i - 1][w];
                }
            }
        }
        return K[n][W];
    }

    public static void main(String[] args) {
        int val[] = {60, 100, 120};
        int wt[] = {10, 20, 30};
        int W = 50;
        int n = val.length;
        int result = knapsack(W, wt, val, n);
        System.out.println("最大价值为: " + result);
    }
}
```

### JavaScript 实现

```javascript
function knapsack(W, wt, val, n) {
    const K = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (wt[i - 1] <= w) {
                K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }
    return K[n][W];
}

// 示例
const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;
const result = knapsack(W, wt, val, n);
console.log("最大价值为:", result);
```

### Ruby 实现

```ruby
def knapsack(W, wt, val, n)
  K = Array.new(n + 1) { Array.new(W + 1, 0) }

  (0..n).each do |i|
    (0..W).each do |w|
      if i == 0 || w == 0
        K[i][w] = 0
      elsif wt[i - 1] <= w
        K[i][w] = [val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]].max
      else
        K[i][w] = K[i - 1][w]
      end
    end
  end

  K[n][W]
end

# 示例
val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = val.length
result = knapsack(W, wt, val, n)
puts "最大价值为: #{result}"
```
