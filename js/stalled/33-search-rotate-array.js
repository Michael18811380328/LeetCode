// 33 寻找数组中的数字
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
// 你可以假设数组中不存在重复的元素。
// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

// 方法一：使用数组的API
// 执行用时 :
// 68 ms
// , 在所有 JavaScript 提交中击败了
// 69.46%
// 的用户
// 内存消耗 :
// 33.3 MB
// , 在所有 JavaScript 提交中击败了
// 100.00%
// 的用户
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  return nums.indexOf(target);
}

// 如何使用二分法寻找这个数？ 这个方法还有问题
// 首先寻找数组中的最大值，然后把数组正序排列，然后寻找目标值；或者在循环上面做文章。
// var search = function(nums, target) {
//   let max = Math.max(...nums);
//   let maxIndex = nums.indexOf(max);
//   // 找到最大值和索引，然后调整数组
//   let nums1 = nums.slice(maxIndex + 1);
//   let nums2 = nums.slice(0, maxIndex + 1);
//   let nums3 = nums2.concat(nums1);
//   // 已经获取调整后的数组，然后二分法查找
//   let i = 0, j = nums3.length;
//   while (i < j) {
//       let index = Math.floor((j - i) / 2);
//       let k = nums3[index];
//       if (k === target) {
//           return index;
//       } else if (k < target) {
//           i = k;
//       } else if (k > target) {
//           j = k;
//       }
//       console.log(i, j)
//   }
//   return -1;
// }

export { search };
