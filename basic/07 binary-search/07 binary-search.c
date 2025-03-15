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
