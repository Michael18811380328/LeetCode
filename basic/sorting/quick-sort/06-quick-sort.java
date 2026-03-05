public class QuickSort {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // 选择最后一个元素作为基准
        int i = (low - 1); // 小于基准的元素的索引

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // 交换
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // 交换基准元素到正确位置
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        System.out.print("排序后的数组: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
