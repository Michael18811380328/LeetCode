判别分析是一种用于分类的统计方法，常用于将观测值分配到预定义的类别中。以下是使用不同编程语言实现线性判别分析（LDA）的示例。

### 1. C 语言实现

```c
#include <stdio.h>
#include <stdlib.h>

void lda(double** data, int* labels, int n, int m, double* mean, double* w) {
    double total_mean = 0;
    for (int i = 0; i < n; i++) {
        total_mean += data[i][0];
    }
    total_mean /= n;

    double between_class_var = 0;
    double within_class_var = 0;

    for (int i = 0; i < n; i++) {
        double diff = data[i][0] - total_mean;
        between_class_var += diff * diff;
    }

    for (int i = 0; i < n; i++) {
        double diff = data[i][0] - mean[labels[i]];
        within_class_var += diff * diff;
    }

    *w = between_class_var / within_class_var;
}

int main() {
    int n = 6; // Number of samples
    int m = 1; // Number of features
    double* data[6] = {
        (double[]){1.0}, (double[]){2.0}, (double[]){1.5},
        (double[]){6.0}, (double[]){7.0}, (double[]){6.5}
    };
    int labels[6] = {0, 0, 0, 1, 1, 1};
    double mean[2] = {1.5, 6.5};
    double w;

    lda(data, labels, n, m, mean, &w);
    printf("LDA weight: %.2f\n", w);
    return 0;
}
```

### 2. Python 实现

```python
import numpy as np

def lda(X, y):
    classes = np.unique(y)
    mean_overall = np.mean(X, axis=0)
    mean_classes = [np.mean(X[y == c], axis=0) for c in classes]
    
    S_B = np.zeros((X.shape[1], X.shape[1]))  # Between-class scatter
    S_W = np.zeros((X.shape[1], X.shape[1]))  # Within-class scatter
    
    for i, c in enumerate(classes):
        n_c = X[y == c].shape[0]
        mean_c = mean_classes[i].reshape(X.shape[1], 1)
        mean_overall = mean_overall.reshape(X.shape[1], 1)
        
        S_B += n_c * (mean_c - mean_overall).dot((mean_c - mean_overall).T)
        S_W += np.cov(X[y == c].T) * (n_c - 1)
    
    eigvals, eigvecs = np.linalg.eig(np.linalg.inv(S_W).dot(S_B))
    return eigvecs[:, np.argmax(eigvals)]

X = np.array([[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]])
y = np.array([0, 0, 0, 1, 1, 1])
w = lda(X, y)
print(f"LDA weights: {w}")
```

### 3. Java 实现

```java
import java.util.Arrays;

public class LDA {
    public static double[] lda(double[][] data, int[] labels) {
        int n = data.length;
        int m = data[0].length;
        double[] meanOverall = new double[m];
        double[][] meanClasses = new double[2][m];
        int[] classCounts = new int[2];

        // Calculate overall mean and class means
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                meanOverall[j] += data[i][j];
                if (labels[i] == 0) {
                    meanClasses[0][j] += data[i][j];
                    classCounts[0]++;
                } else {
                    meanClasses[1][j] += data[i][j];
                    classCounts[1]++;
                }
            }
        }
        
        for (int j = 0; j < m; j++) {
            meanOverall[j] /= n;
            meanClasses[0][j] /= classCounts[0];
            meanClasses[1][j] /= classCounts[1];
        }

        // Calculate between-class and within-class scatter
        double[][] S_B = new double[m][m];
        double[][] S_W = new double[m][m];

        for (int c = 0; c < 2; c++) {
            double[] meanDiff = new double[m];
            for (int j = 0; j < m; j++) {
                meanDiff[j] = meanClasses[c][j] - meanOverall[j];
            }
            for (int j = 0; j < m; j++) {
                S_B[j][j] += classCounts[c] * meanDiff[j] * meanDiff[j];
            }
        }

        for (int i = 0; i < n; i++) {
            double[] meanDiff = new double[m];
            for (int j = 0; j < m; j++) {
                meanDiff[j] = data[i][j] - meanClasses[labels[i]][j];
            }
            for (int j = 0; j < m; j++) {
                S_W[j][j] += meanDiff[j] * meanDiff[j];
            }
        }

        // Calculate weights (not fully implemented, just a placeholder)
        double[] weights = new double[m];
        for (int j = 0; j < m; j++) {
            weights[j] = S_B[j][j] / S_W[j][j]; // Simplified calculation
        }

        return weights;
    }

    public static void main(String[] args) {
        double[][] data = {{1, 2}, {2, 3}, {1.5, 2.5}, {6, 7}, {7, 8}, {6.5, 7.5}};
        int[] labels = {0, 0, 0, 1, 1, 1};
        double[] weights = lda(data, labels);
        System.out.println("LDA weights: " + Arrays.toString(weights));
    }
}
```

### 4. JavaScript 实现

```javascript
function lda(X, y) {
    const classes = [...new Set(y)];
    const meanOverall = X.reduce((acc, row) => acc.map((val, i) => val + row[i]), Array(X[0].length).fill(0)).map(val => val / X.length);
    const meanClasses = classes.map(c => X.filter((_, i) => y[i] === c).reduce((acc, row) => acc.map((val, i) => val + row[i]), Array(X[0].length).fill(0)).map(val => val / X.filter(label => label === c).length));

    let S_B = Array(X[0].length).fill(0).map(() => Array(X[0].length).fill(0));
    let S_W = Array(X[0].length).fill(0).map(() => Array(X[0].length).fill(0));

    classes.forEach((c, idx) => {
        const n_c = X.filter((_, i) => y[i] === c).length;
        const meanDiff = meanClasses[idx].map((val, i) => val - meanOverall[i]);
        for (let i = 0; i < meanDiff.length; i++) {
            for (let j = 0; j < meanDiff.length; j++) {
                S_B[i][j] += n_c * meanDiff[i] * meanDiff[j];
            }
        }
    });

    X.forEach((row, i) => {
        const meanDiff = row.map((val, j) => val - meanClasses[y[i]]);
        for (let j = 0; j < meanDiff.length; j++) {
            for (let k = 0; k < meanDiff.length; k++) {
                S_W[j][k] += meanDiff[j] * meanDiff[k];
            }
        }
    });

    // Calculate weights (not fully implemented, just a placeholder)
    const weights = S_B.map((row, i) => row[i] / S_W[i][i]);
    return weights;
}

const X = [[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]];
const y = [0, 0, 0, 1, 1, 1];
const weights = lda(X, y);
console.log(`LDA weights: ${weights}`);
```

### 5. Ruby 实现

```ruby
require 'matrix'

def lda(data, labels)
  classes = labels.uniq
  mean_overall = data.mean(axis: 0)
  mean_classes = classes.map { |c| data[labels == c].mean(axis: 0) }

  S_B = Matrix.zero(data.column_count)
  S_W = Matrix.zero(data.column_count)

  classes.each_with_index do |c, i|
    n_c = data[labels == c].row_count
    mean_diff = mean_classes[i] - mean_overall
    S_B += n_c * mean_diff.outer_product(mean_diff)
  end

  classes.each_with_index do |c, i|
    data[labels == c].each_row do |row|
      mean_diff = row - mean_classes[i]
      S_W += mean_diff.outer_product(mean_diff)
    end
  end

  w = S_B * S_W.inverse
  w.eigenvectors.map(&:to_a).flatten
end

data = Matrix[[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]]
labels = [0, 0, 0, 1, 1, 1]
weights = lda(data, labels)
puts "LDA weights: #{weights}"
```

这些代码示例展示了如何在不同编程语言中实现线性判别分析（LDA）。请根据需要进行调整和扩展。