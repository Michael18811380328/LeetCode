#include <stdio.h>

// 我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。
int max_sum_subarray(int arr[], int n, int k) {
    if (n < k) return -1;

    int max_sum = 0, window_sum = 0;

    // 计算第一个窗口的和
    for (int i = 0; i < k; i++) {
        window_sum += arr[i];
    }
    max_sum = window_sum;

    // 移动窗口
    for (int i = k; i < n; i++) {
        window_sum += arr[i] - arr[i - k]; // 添加新元素，移除旧元素
        if (window_sum > max_sum) {
            max_sum = window_sum;
        }
    }
    return max_sum;
}

int main() {
    int arr[] = {2, 1, 5, 1, 3, 2};
    int k = 3;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = max_sum_subarray(arr, n, k);
    printf("最大和为: %d\n", result);
    return 0;
}
