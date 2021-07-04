/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 思路1：暴力法：直接把矩阵转换成数组，然后排序，然后返回值
// 这个可以实现，数组最长90000，不会超出内存限制
// 但是性能很差
// Your runtime beats 48.99 % of javascript submissions
var kthSmallest = function(matrix, k) {
  let arr = matrix.flat(1);
  arr.sort((a, b) => a > b ? 1 : -1);
  return arr[k - 1];
};

// 思路二：如果一个元素位于 (i, j) 点
// 那么右方和下方两个数组一定大于这个数字
// 然后进行比较，获取一条对角线上的数组，从左上角到右下角依次遍历
// 直接满足K个数字
// 这是结拜呢的思路，但是细节还需要考虑
// 还有没有更好的办法
// @lc code=end

