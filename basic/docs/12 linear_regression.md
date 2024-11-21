回归分析是一种统计方法，用于分析变量之间的关系。以下是使用不同编程语言实现简单线性回归的示例。

### 1. C 语言实现

```c
#include <stdio.h>

void linear_regression(double x[], double y[], int n, double *m, double *b) {
    double sum_x = 0, sum_y = 0, sum_xy = 0, sum_x2 = 0;
    
    for (int i = 0; i < n; i++) {
        sum_x += x[i];
        sum_y += y[i];
        sum_xy += x[i] * y[i];
        sum_x2 += x[i] * x[i];
    }
    
    *m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x);
    *b = (sum_y - (*m) * sum_x) / n;
}

int main() {
    double x[] = {1, 2, 3, 4, 5};
    double y[] = {2, 3, 5, 7, 11};
    double m, b;
    int n = 5;

    linear_regression(x, y, n, &m, &b);
    printf("y = %.2fx + %.2f\n", m, b);
    return 0;
}
```

### 2. Python 实现

```python
import numpy as np

def linear_regression(x, y):
    m, b = np.polyfit(x, y, 1)
    return m, b

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
m, b = linear_regression(x, y)
print(f"y = {m:.2f}x + {b:.2f}")
```

### 3. Java 实现

```java
public class LinearRegression {
    public static double[] linearRegression(double[] x, double[] y) {
        int n = x.length;
        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

        for (int i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumX2 += x[i] * x[i];
        }

        double m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        double b = (sumY - m * sumX) / n;

        return new double[]{m, b};
    }

    public static void main(String[] args) {
        double[] x = {1, 2, 3, 4, 5};
        double[] y = {2, 3, 5, 7, 11};
        double[] result = linearRegression(x, y);
        System.out.printf("y = %.2fx + %.2f%n", result[0], result[1]);
    }
}
```

### 4. JavaScript 实现

```javascript
function linearRegression(x, y) {
    const n = x.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

    for (let i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumX2 += x[i] * x[i];
    }

    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / n;

    return { m, b };
}

const x = [1, 2, 3, 4, 5];
const y = [2, 3, 5, 7, 11];
const { m, b } = linearRegression(x, y);
console.log(`y = ${m.toFixed(2)}x + ${b.toFixed(2)}`);
```

### 5. Ruby 实现

```ruby
def linear_regression(x, y)
  n = x.length
  sum_x = x.sum
  sum_y = y.sum
  sum_xy = x.zip(y).map { |a, b| a * b }.sum
  sum_x2 = x.map { |a| a * a }.sum

  m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)
  b = (sum_y - m * sum_x) / n

  return m, b
end

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
m, b = linear_regression(x, y)
puts "y = #{m.round(2)}x + #{b.round(2)}"
```

这些代码示例展示了如何在不同编程语言中实现简单线性回归算法。你可以根据自己的需求进行调整和扩展。