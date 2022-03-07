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
const findTheDistanceValue = function(arr1, arr2, d) {
  // 基本思路：双重循环，然后判断每一个是否满足要求
  let tmp = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        break;
      }
      if (j === arr2.length - 1) {
        tmp++;
      }
    }
  }
  return tmp;
  // 2分查找，排序
  // 改进：如果把一个数组转换成对象，那么遍历一次这个数组即可
  // 这样2N即可完成全部的检查（先排序）
};
// @lc code=end

// 正确的思路：使用二分法和排序解决，第一种解决方案的效率低下
// var findTheDistanceValue = function(arr1, arr2, d) {
//   // 对数组2进行排序
//   // 然后循环数组1，使用二分法判断是否满足条件
//   arr2.sort((a, b) => a - b);
//   const len = arr2.length;
//   let res = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     let item = arr1[i];
//     let start = 0;
//     let end = len - 1;
//     // 如果当前的数字在区域外部，那么跳过继续循环
//     if (item < arr2[start] - d || item > arr2[end] + d) {
//       continue;
//     }
//     let middle;
//     // 当前数字在区间内部，那么二分法判断是否在区间中
//     while (start < end) {
//       if (middle === Math.floor((start + end) / 2)) {
//         continue;
//       }
//       middle = Math.floor((start + end) / 2);
//       if (item < arr2[middle] - d || item > arr2[middle] + d) {
//         res++;
//         start = end;
//         // 如果满足条件，那么结束循环
//       }
//       else if (item < arr2[middle]) {
//         end = middle;
//       }
//       else if (item > arr2[middle]) {
//         start = middle;
//       }
//     }
//   }
//   return res;
// };

// 预期是3
// 现在是0
