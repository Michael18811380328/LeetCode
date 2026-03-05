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
