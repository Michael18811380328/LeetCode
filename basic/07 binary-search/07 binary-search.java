public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

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

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int target = 10;
        int result = binarySearch(arr, target);
        
        if (result != -1) {
            System.out.println("元素在索引 " + result + " 处");
        } else {
            System.out.println("元素未找到");
        }
    }
}
