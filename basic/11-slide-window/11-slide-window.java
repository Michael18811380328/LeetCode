// 我们将以寻找一个数组中最大和为例，假设我们要找到长度为 `k` 的子数组的最大和。
public class SlidingWindow {
    public static int maxSumSubarray(int[] arr, int k) {
        int n = arr.length;
        if (n < k) return -1;

        int maxSum = 0;
        int windowSum = 0;

        // 计算第一个窗口的和
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;

        // 移动窗口
        for (int i = k; i < n; i++) {
            windowSum += arr[i] - arr[i - k]; // 添加新元素，移除旧元素
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 1, 3, 2};
        int k = 3;
        int result = maxSumSubarray(arr, k);
        System.out.println("最大和为: " + result);
    }
}
