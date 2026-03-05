// 判别分析（LDA）是一种用于分类的统计方法，常用于将观测值分配到预定义的类别中。
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
