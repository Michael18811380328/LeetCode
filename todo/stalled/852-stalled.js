/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  let mid = Math.floor((end - start) / 2);
  if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
    return mid;
  }

  while (arr[mid] <= arr[mid - 1] || arr[mid] <= arr[mid + 1]) {
    if (arr[mid] <= arr[mid - 1]) {
      end = mid;
      mid = Math.floor((end - start) / 2);
    }
    else {
      start = mid;
      mid = Math.floor((end - start) / 2);
    }
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
  }
};
// @lc code=end
