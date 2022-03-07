/*
 * @lc app=leetcode.cn id=1577 lang=javascript
 *
 * [1577] 数的平方等于两数乘积的方法数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 思路一，三层循环
// 4394ms
// Your runtime beats 50 % of javascript submissions
// const numTriplets = function(nums1, nums2) {
//   const foo = (arr1, arr2) => {
//     // 获取一个数组的全排列，然后遍历另一个数组的平方，看是否相等即可
//     // 现在性能很不好，三层循环，能否优化？
//     let sum = 0;
//     const arr3 = arr2.map(item => Math.pow(item, 2));
//     const len = arr1.length;
//     const len3 = arr3.length;
//     // 这个可以优化成对象，减少一层循环
//     // 因为数组中数字可能重复，所以这里需要记录出现的次数
//     for (let i = 0; i < len; i++) {
//       for (let j = i + 1; j < len; j++) {
//         const curr = arr1[i] * arr1[j];
//         for (let k = 0; k < len3; k++) {
//           if (curr === arr3[k]) {
//             sum++;
//           }
//         }
//       }
//     }
//     return sum;
//   };
//   return foo(nums1, nums2) + foo(nums2, nums1);
// };

// 思路二：两层循环
// 196 ms
// Your runtime beats 50 % of javascript submissions
const numTriplets = function(nums1, nums2) {
  const foo = (arr1, arr2) => {
    let sum = 0;
    // 获取字典和出现的个数
    const arr3 = arr2.map((item) => Math.pow(item, 2));
    const dict = {};
    arr3.forEach((ele) => {
      if (dict[ele]) {
        dict[ele]++;
      } else {
        dict[ele] = 1;
      }
    });
    // 遍历平方和
    const len = arr1.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const curr = arr1[i] * arr1[j];
        if (dict[curr]) {
          sum += dict[curr];
        }
      }
    }
    return sum;
  };
  return foo(nums1, nums2) + foo(nums2, nums1);
};

// @lc code=end
