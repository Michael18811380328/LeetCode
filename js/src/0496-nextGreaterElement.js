/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 思路一：遍历nums1，然后找到对应在 nums2 的位置，然后再循环nums2 到最后，这样N2可以实现，但是效率不高
// 100 ms, 在所有 JavaScript 提交中击败了38.72%
var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let item = nums1[i];
    let index = nums2.indexOf(item);
    let target;
    while (index <= nums2.length - 1) {
      if (nums2[index] > item) {
        target = nums2[index];
        break;
      } else {
        index++;
      }
    }
    target = target === undefined ? -1 : target;
    res.push(target);
  }
  return res;
};

// 思路二：既然是不重复的，那么是否可以利用字典，获取nums2中的键，然后排序一下，这样的效果是否好一点？
// var nextGreaterElement = function(nums1, nums2) {
//   let dict = [];
//   for (let i = 0; i < nums2.length; i++) {
//     let key = nums2[i];
//     let obj = {key, index: i};
//     dict.push(obj);
//   }
//   // dict 排序
//   dict.sort((a, b) => a.key > b.key);
//   console.log(dict);
//   let res = [];
//   for (let i = 0; i < nums1; i++) {
//     let cur = nums1[i];
//     let item = dict.find(item => item.key === cur);
//     for (let i = item.key; i < dict.length; i++) {
//       if (dict[i].index > dict[item.key].index) {
//         console.log(i);
//         break;
//       }
//     }
//     console.log();
//   }
// };

// @lc code=end

