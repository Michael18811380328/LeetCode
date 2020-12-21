/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  // 对数组2进行排序
  // 然后循环数组1，使用二分法判断是否满足条件
  arr2.sort((a, b) => a - b);
  const len = arr2.length;
  let res = 0;
  // console.log(arr2);
  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    let start = 0;
    let end = len - 1;
    // 如果当前的数字在区域外部，那么跳过继续循环
    if (item < arr2[start] - d || item > arr2[end] + d) {
      continue;
    }
    let middle;
    // 当前数字在区间内部，那么二分法判断是否在区间中
    while (start < end) {
      if (middle === Math.floor((start + end) / 2)) {
        continue;
      }
      middle = Math.floor((start + end) / 2);
      if (item < arr2[middle] - d || item > arr2[middle] + d) {
        res++;
        start = end;
        // 如果满足条件，那么结束循环
      }
      else if (item < arr2[middle]) {
        end = middle;
      }
      else if (item > arr2[middle]) {
        start = middle;
      }
    }
  }
  return res;
};
// @lc code=end

